import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

// The public landing page has its own stylesheet. Restricting Tailwind's scan
// to its actual components prevents admin, editor, and dashboard utilities from
// being shipped to first-time homepage visitors.
export default {
    darkMode: 'class',
    content: [
        './resources/views/home.blade.php',
        './resources/js/Pages/**/*.{jsx,tsx,js,ts}',
        './resources/js/Pages/HomeComponents/**/*.{jsx,tsx,js,ts}',
        './resources/js/NextComponents/**/*.{jsx,tsx,js,ts}',
        './resources/js/Components/**/*.{jsx,tsx,js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#f2650b',
                    'orange-hover': '#ea580c',
                    navy: '#082755',
                    'navy-hover': '#0c3570',
                },
            },
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms],
};
