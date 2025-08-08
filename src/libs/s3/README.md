# S3 Helper untuk IDCloudHost Object Storage

Helper ini menyediakan fungsi-fungsi untuk mengelola file gambar di IDCloudHost Object Storage yang kompatibel dengan S3 API.

## Konfigurasi

Pastikan environment variables berikut sudah diset di file `.env`:

```env
AWS_REGION="ap-southeast-1"
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
S3_BUCKET_NAME="your_bucket_name"
S3_BASE_URL="https://is3.cloudhost.id/your_bucket_name"
S3_ENDPOINT="http://is3.cloudhost.id"
S3_FORCE_PATH_STYLE="true"
```

## Dependencies

Pastikan package berikut sudah terinstall:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner uuid
npm install --save-dev @types/uuid
```

## Fungsi yang Tersedia

### 1. Upload Gambar

#### `uploadImage(file: File, folder?: string)`
Upload file gambar langsung.

```typescript
import { uploadImage } from '@/libs/s3';

const result = await uploadImage(file, 'uploads');
if (result.success) {
  console.log('URL:', result.url);
  console.log('Key:', result.key);
}
```

#### `uploadImageFromBuffer(buffer: Buffer | string, filename: string, contentType: string, folder?: string)`
Upload gambar dari buffer atau base64 string.

```typescript
import { uploadImageFromBuffer } from '@/libs/s3';

const result = await uploadImageFromBuffer(
  base64String,
  'profile.jpg',
  'image/jpeg',
  'profiles'
);
```

### 2. Hapus Gambar

#### `deleteImage(key: string)`
Hapus gambar berdasarkan key.

```typescript
import { deleteImage } from '@/libs/s3';

const result = await deleteImage('uploads/1234567890-abcd1234.jpg');
```

#### `deleteImageByUrl(url: string)`
Hapus gambar berdasarkan URL.

```typescript
import { deleteImageByUrl } from '@/libs/s3';

const result = await deleteImageByUrl('https://is3.cloudhost.id/bucket/uploads/image.jpg');
```

### 3. Utilitas Lainnya

#### `generatePresignedUrl(key: string, expiresIn?: number)`
Generate URL sementara untuk akses file.

```typescript
import { generatePresignedUrl } from '@/libs/s3';

const url = await generatePresignedUrl('uploads/image.jpg', 3600); // 1 jam
```

#### `imageExists(key: string)`
Cek apakah gambar ada di storage.

```typescript
import { imageExists } from '@/libs/s3';

const exists = await imageExists('uploads/image.jpg');
```

#### `getImageMetadata(key: string)`
Dapatkan metadata gambar.

```typescript
import { getImageMetadata } from '@/libs/s3';

const metadata = await getImageMetadata('uploads/image.jpg');
console.log(metadata.contentType, metadata.contentLength);
```

## Validasi File

### Tipe File yang Didukung
- image/jpeg
- image/jpg
- image/png
- image/gif
- image/webp

### Ukuran Maksimal
- 5MB per file

## Contoh Penggunaan dalam API

### Upload Endpoint
```typescript
import { uploadImage } from '@/libs/s3';
import { Response } from '@/libs/response';

export const uploadImageEndpoint = async (c: Context) => {
  try {
    const body = await c.req.parseBody();
    const file = body.image as File;
    
    if (!file) {
      return Response(c, false, 'File gambar diperlukan', null, 400);
    }
    
    const result = await uploadImage(file, 'uploads');
    
    if (result.success) {
      return Response(c, true, 'Upload berhasil', {
        url: result.url,
        key: result.key
      });
    } else {
      return Response(c, false, result.message, null, 400);
    }
  } catch (error) {
    return Response(c, false, 'Terjadi kesalahan server', null, 500);
  }
};
```

### Delete Endpoint
```typescript
import { deleteImage } from '@/libs/s3';
import { Response } from '@/libs/response';

export const deleteImageEndpoint = async (c: Context) => {
  try {
    const { key } = c.req.param();
    
    const result = await deleteImage(key);
    
    if (result.success) {
      return Response(c, true, 'Gambar berhasil dihapus');
    } else {
      return Response(c, false, result.message, null, 400);
    }
  } catch (error) {
    return Response(c, false, 'Terjadi kesalahan server', null, 500);
  }
};
```

## Best Practices

1. **Validasi File**: Selalu validasi tipe dan ukuran file sebelum upload
2. **Simpan Key**: Simpan key gambar di database untuk referensi
3. **Organisasi Folder**: Gunakan folder yang berbeda untuk kategori gambar
4. **Cleanup**: Hapus gambar lama saat update gambar baru
5. **Error Handling**: Selalu handle error dengan baik
6. **Security**: Jangan expose credentials di client-side

## Troubleshooting

### Error: "Access Denied"
- Pastikan credentials AWS benar
- Pastikan bucket name benar
- Pastikan permissions bucket sudah diset

### Error: "Invalid file type"
- Pastikan file yang diupload adalah gambar
- Cek MIME type file

### Error: "File too large"
- Pastikan ukuran file tidak melebihi 5MB
- Kompres gambar jika perlu

### Error: "Endpoint not found"
- Pastikan S3_ENDPOINT benar
- Pastikan S3_FORCE_PATH_STYLE="true"

## Struktur URL

URL gambar yang dihasilkan akan mengikuti format:
```
https://is3.cloudhost.id/bucket_name/folder/timestamp-uuid.extension
```

Contoh:
```
https://is3.cloudhost.id/utcareers/uploads/1703123456789-abcd1234.jpg
```