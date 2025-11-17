export default function Button({label}){
    return (
        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
         {label}
        </button>
    );
}