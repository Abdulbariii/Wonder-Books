import React, { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/Config";

export default function useCollection(collection, arrayQuery, sort) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const query = useRef(arrayQuery).current;
  const sortByOrder = useRef(sort).current;
  useEffect(() => {
    let ref = projectFirestore.collection(collection);
    if (query) {
      ref = ref.where(...query);
    }

    if (sortByOrder) {
      ref = ref.orderBy(...sortByOrder);
    }

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
  }, [collection, query]);

  return { documents, error, sort };
}
