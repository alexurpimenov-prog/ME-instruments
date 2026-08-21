// IndexedDB helper for persisting large image data without localStorage 5MB quota limits

const DB_NAME = 'me_instruments_db';
const STORE_NAME = 'uploaded_images';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveImageToDB(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to save image in IndexedDB, fallback to localStorage', err);
    try {
      localStorage.setItem(`img_${key}`, dataUrl);
    } catch {
      console.warn('LocalStorage also exceeded');
    }
  }
}

export async function getAllImagesFromDB(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const images: Record<string, string> = {};

      // Get all keys
      const keyReq = store.getAllKeys();
      keyReq.onsuccess = () => {
        const keys = keyReq.result as string[];
        if (keys.length === 0) {
          // Check localStorage legacy fallback
          const legacy: Record<string, string> = {};
          try {
            const raw = localStorage.getItem('me_instruments_images');
            if (raw) Object.assign(legacy, JSON.parse(raw));
          } catch {
            // ignore
          }
          resolve(legacy);
          return;
        }

        let pending = keys.length;
        keys.forEach((k) => {
          const valReq = store.get(k);
          valReq.onsuccess = () => {
            if (valReq.result) {
              images[k] = valReq.result;
            }
            pending--;
            if (pending === 0) resolve(images);
          };
          valReq.onerror = () => {
            pending--;
            if (pending === 0) resolve(images);
          };
        });
      };
      keyReq.onerror = () => reject(keyReq.error);
    });
  } catch (err) {
    console.error('IndexedDB open error:', err);
    return {};
  }
}

export async function clearAllImagesFromDB(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => {
        try {
          localStorage.removeItem('me_instruments_images');
        } catch {
          // ignore
        }
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    // ignore
  }
}
