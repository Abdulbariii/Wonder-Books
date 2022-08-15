import React, { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/Config";

export default function useCollection(collection) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const uns = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        setError("NOT FETCHING");
        console.log(error);
      }
    );

    return () => uns();
  }, [collection]);

  return { documents, error };
}
