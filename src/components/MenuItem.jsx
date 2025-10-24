function MenuItem({ name, thumb, category, price }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-full">
        <img src={thumb} alt={name} className="w-32 h-32 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-1 capitalize">{category}</p>
        <p className="text-yellow-700 font-bold text-md mt-auto">{price} €</p>
      </div>
    );
  }
  
  export default MenuItem;
  