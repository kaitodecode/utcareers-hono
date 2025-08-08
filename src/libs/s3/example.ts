// import { uploadImage, uploadImageFromBuffer, deleteImage, deleteImageByUrl, generatePresignedUrl, imageExists, getImageMetadata } from './index';

// /**
//  * Contoh penggunaan S3 Helper untuk IDCloudHost Object Storage
//  */

// // 1. Upload gambar dari file
// export const handleFileUpload = async (file: File) => {
//   try {
//     const result = await uploadImage(file, 'uploads');
    
//     if (result.success) {
//       console.log('Upload berhasil:', result.url);
//       return {
//         success: true,
//         url: result.url,
//         key: result.key
//       };
//     } else {
//       console.error('Upload gagal:', result.message);
//       return {
//         success: false,
//         message: result.message
//       };
//     }
//   } catch (error) {
//     console.error('Error upload:', error);
//     return {
//       success: false,
//       message: 'Terjadi kesalahan saat upload'
//     };
//   }
// };

// // 2. Upload gambar dari base64
// export const handleBase64Upload = async (base64String: string, filename: string) => {
//   try {
//     const result = await uploadImageFromBuffer(
//       base64String,
//       filename,
//       'image/jpeg', // atau sesuai tipe file
//       'profiles' // folder khusus untuk foto profil
//     );
    
//     if (result.success) {
//       console.log('Upload base64 berhasil:', result.url);
//       return result;
//     } else {
//       console.error('Upload base64 gagal:', result.message);
//       return result;
//     }
//   } catch (error) {
//     console.error('Error upload base64:', error);
//     return {
//       success: false,
//       message: 'Terjadi kesalahan saat upload base64'
//     };
//   }
// };

// // 3. Hapus gambar berdasarkan key
// export const handleDeleteImage = async (key: string) => {
//   try {
//     const result = await deleteImage(key);
    
//     if (result.success) {
//       console.log('Hapus gambar berhasil');
//       return result;
//     } else {
//       console.error('Hapus gambar gagal:', result.message);
//       return result;
//     }
//   } catch (error) {
//     console.error('Error hapus gambar:', error);
//     return {
//       success: false,
//       message: 'Terjadi kesalahan saat hapus gambar'
//     };
//   }
// };

// // 4. Hapus gambar berdasarkan URL
// export const handleDeleteImageByUrl = async (imageUrl: string) => {
//   try {
//     const result = await deleteImageByUrl(imageUrl);
    
//     if (result.success) {
//       console.log('Hapus gambar berhasil');
//       return result;
//     } else {
//       console.error('Hapus gambar gagal:', result.message);
//       return result;
//     }
//   } catch (error) {
//     console.error('Error hapus gambar:', error);
//     return {
//       success: false,
//       message: 'Terjadi kesalahan saat hapus gambar'
//     };
//   }
// };

// // 5. Generate URL sementara (presigned URL)
// export const handleGeneratePresignedUrl = async (key: string, expiresInSeconds: number = 3600) => {
//   try {
//     const url = await generatePresignedUrl(key, expiresInSeconds);
//     console.log('Presigned URL:', url);
//     return url;
//   } catch (error) {
//     console.error('Error generate presigned URL:', error);
//     throw error;
//   }
// };

// // 6. Cek apakah gambar ada
// export const handleCheckImageExists = async (key: string) => {
//   try {
//     const exists = await imageExists(key);
//     console.log(`Gambar ${key} ${exists ? 'ada' : 'tidak ada'}`);
//     return exists;
//   } catch (error) {
//     console.error('Error cek gambar:', error);
//     return false;
//   }
// };

// // 7. Dapatkan metadata gambar
// export const handleGetImageMetadata = async (key: string) => {
//   try {
//     const metadata = await getImageMetadata(key);
//     console.log('Metadata gambar:', metadata);
//     return metadata;
//   } catch (error) {
//     console.error('Error get metadata:', error);
//     throw error;
//   }
// };

// // Contoh penggunaan dalam endpoint API
// export const exampleApiUsage = {
//   // Upload gambar dalam endpoint
//   uploadEndpoint: async (file: File) => {
//     const uploadResult = await handleFileUpload(file);
    
//     if (uploadResult.success) {
//       // Simpan URL ke database
//       // await saveImageUrlToDatabase(uploadResult.url, uploadResult.key);
      
//       return {
//         success: true,
//         data: {
//           url: uploadResult.url,
//           key: uploadResult.key
//         }
//       };
//     } else {
//       return {
//         success: false,
//         message: uploadResult.message
//       };
//     }
//   },
  
//   // Hapus gambar dalam endpoint
//   deleteEndpoint: async (imageKey: string) => {
//     // Hapus dari S3
//     const deleteResult = await handleDeleteImage(imageKey);
    
//     if (deleteResult.success) {
//       // Hapus dari database
//       // await deleteImageFromDatabase(imageKey);
      
//       return {
//         success: true,
//         message: 'Gambar berhasil dihapus'
//       };
//     } else {
//       return {
//         success: false,
//         message: deleteResult.message
//       };
//     }
//   }
// };

// // Tips penggunaan:
// // 1. Selalu validasi file sebelum upload
// // 2. Simpan key gambar di database untuk referensi
// // 3. Gunakan folder yang berbeda untuk kategori gambar yang berbeda
// // 4. Hapus gambar lama saat update gambar baru
// // 5. Gunakan presigned URL untuk akses sementara ke file private