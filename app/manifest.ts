import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ratan Mahal Resort',
        short_name: 'Ratan Mahal',
        description: 'Luxury Stay & Fine Dining in Ratangarh',
        start_url: '/',
        display: 'standalone',
        background_color: '#F5F5DC',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
