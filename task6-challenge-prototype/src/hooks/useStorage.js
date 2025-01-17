import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref('/uploads/' + file.name);
    const collectionRef = projectFirestore.collection('uploads');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const string = file.name;
      const name = string.slice(0, -4);
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ name, url, createdAt });
      setUrl(url);
    })
  }, [file]);

  return { progress, url, error }

}

export default useStorage;