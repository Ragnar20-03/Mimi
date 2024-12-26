// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import Image from "next/image";

// export default function AddPostPopup({ onClose, onAddPost }) {
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: Date.now(),
//       user: "Current User",
//       content: description,
//       image: image
//         ? URL.createObjectURL(image)
//         : "/placeholder.svg?height=300&width=300",
//       likes: 0,
//       comments: [],
//     };
//     onAddPost(newPost);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Add New Post</h2>
//           <button onClick={onClose}>
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <textarea
//             className="w-full border rounded-lg p-2 mb-4"
//             rows={4}
//             placeholder="What's on your mind?"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setImage(file);
//               setImagePreview(file ? URL.createObjectURL(file) : null);
//             }}
//             className="mb-4"
//           />
//           {imagePreview && (
//             <div className="mb-4 p-2 bg-amber-50 rounded-lg shadow">
//               <Image
//                 src={imagePreview}
//                 alt="Preview"
//                 width={200}
//                 height={200}
//                 className="w-full max-w-[200px] h-auto rounded mx-auto"
//               />
//             </div>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-amber-700 text-white rounded-lg py-2 px-4 hover:bg-amber-800 transition-colors"
//           >
//             Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
