# React + Vite

# React Meals App

This project is a web application built using **React** and **Vite**, with styles handled by **Tailwind CSS**. It fetches and displays recipes from [TheMealDB API](https://www.themealdb.com/) focused on seafood, beef, and vegetarian dishes. The project includes food search by name, sorting by price (ascending/descending). A loading effect is shown with [`react-loading-indicators`](https://www.npmjs.com/package/react-loading-indicators).

## Features

- Built with React + Vite for fast development and hot reloading
- Styled using Tailwind CSS utility classes
- Data fetched from TheMealDB API (`seafood`, `beef`, and `vegetarian` categories)
- Search meals by name
- Sort products by price ascending/descending
- Loading indicator using `react-loading-indicators`

## Installation

```bash
git clone https://github.com/Jeremy-Pacheco/Api-Menu.git
cd Api-Menu
npm install
npm run dev
```
## Usage

- Meals are loaded from TheMealDB API in real time.
- Use the search field to find meals by name.
- Sort buttons allow you to order meals by price.
- When meals are loading, an animated indicator from `react-loading-indicators` appears centered on the page.

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-loading-indicators](https://www.npmjs.com/package/react-loading-indicators)

## API Reference

- Data Source: [TheMealDB](https://www.themealdb.com/)

## Author

[Jéremy Paul Pacheco Oña](https://github.com/Jeremy-Pacheco)
