import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';

const api = {
    key: 'f8cd47e5ea994f0a941fc2404590fcc0'
};

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=ph&apiKey=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setArticles(result.articles);
            });
    }, []);

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Manila'
        };
        return new Date(dateTimeString).toLocaleString('en-US', options);
    };

    const renderArticleImage = (article) => {
        const imageHeight = 140;

        if (article.urlToImage) {
            return (
                <div style={{ height: imageHeight }}>
                    <CardMedia
                        component="img"
                        src={article.urlToImage}
                        alt={article.title}
                        style={{ height: '100%', objectFit: 'cover' }}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ height: imageHeight }}>
                    <FeedIcon style={{ width: '100%', height: '100%', color: 'gray' }} />
                </div>
            );
        }
    };


    return (
        <div style={{ margin: '50px' }}>
            <Grid container spacing={2}>
                {articles.map((article) => (
                    <Grid item xs={12} sm={6} md={4} key={article.title}>
                        <Card
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                border: '1px solid black',
                                borderRadius: '10px',
                                boxShadow: '0 8px 8px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            {renderArticleImage(article)}
                            <CardContent>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'black', textDecoration: 'none' }}
                                >
                                    <h2 style={{ marginBottom: '1rem' }}>{article.title}</h2>
                                    <p style={{ color: 'blue', textDecorationColor: 'blue' }}>Learn more...</p>
                                </a>
                                <p>{formatDateTime(article.publishedAt)}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
};

export default HomePage;
