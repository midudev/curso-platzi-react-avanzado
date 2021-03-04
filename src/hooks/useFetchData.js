import React, { useState, useEffect } from 'react';

export const useFetchData = (BASE_URL = '', error_msg = 'An error has ocurred getting the data') => {
    const [fetch_data, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await window.fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error('HTTP Status ' + response.status)
                }
                const data = await response.json();

                setFetchData(data);
            } catch (e) {
                console.error(e.message);
                setError(error_msg)
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return { data: fetch_data, loading, error }
}