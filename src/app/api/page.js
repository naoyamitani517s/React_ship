'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Api() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://192.168.56.1:8080/api/hello')
            .then(response => {
                console.log('Response data:', response.data); // レスポンス内容を確認
                setMessage(response.data.message);
            })
            .catch(err => {
                console.error('Error details:', err); // 詳細エラーをログ出力
                setError('Failed to fetch data.');
            });
    }, []);

    return (
        <div>
            {error ? (
                <h1>{error}</h1>
            ) : (
                <h1>{message || 'Loading...'}</h1>
            )}
        </div>
    );
}
