import sanityClient from '@sanity/client';
import imgURLBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'x3nehxf1',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk9Bqg6C2TCxnxmsA13QXUoiuMtrRQnEfxyGG9XbYzqjRxzfTSncCUMqaHvqUM24wbmngDzMyDc0zOZT6G0p5h5EapE2h9Q1kwzQPXTBC2SdzCkpSAz5FMM6JxpvClSU1nh9dmhp8tLDDgAy60jctCgkvATngrvvXud1g7aaQPe3dpKwizIt',
});