import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{js,jsx,ts,tsx}',
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
            typography: {
                DEFAULT: {
                    css: {
                        h1: { marginTop: '1.5em', marginBottom: '0.5em' },
                        h2: { marginTop: '1.25em', marginBottom: '0.5em' },
                        h3: { marginTop: '1em', marginBottom: '0.5em' },
                        p: { marginTop: '0.5em', marginBottom: '0.75em' },
                    },
                },
                lg: {
                    css: {
                        h1: { marginTop: '1.5em', marginBottom: '0.5em' },
                        h2: { marginTop: '1.25em', marginBottom: '0.5em' },
                        h3: { marginTop: '1em', marginBottom: '0.5em' },
                        p: { marginTop: '0.5em', marginBottom: '0.75em' },
                    },
                },
            },
        },
    },

    plugins: [
        forms,
        require('@tailwindcss/typography'),
    ],
};
