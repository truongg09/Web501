export default function Button({label}){
    return (
        <button className="px-5 py-2 bg-orange-500 text-white rounded-lg text-xs font-semibold hover:bg-blue-700">
         {label}
        </button>
    );
}