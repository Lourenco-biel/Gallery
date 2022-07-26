import { storage } from './../libs/firebase';
import { Photo } from '../types/photo';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 as createId } from 'uuid'

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "image");
    const photoList = await listAll(imagesFolder);

    for (let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }
    return list;
}

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId()
        let newFile = ref(storage, `image/${randomName}`)
        let upload = await uploadBytes(newFile, file)
        let photoUrl = await getDownloadURL(upload.ref)
        return { name: upload.ref.name, url: photoUrl } as Photo;

    } else {
        return new Error('Tipo de arquivo não permtido')
    }

}

export const deletePhoto = async (name: string) => {
    let photoRef = ref(storage, `image/${name}`);
    await deleteObject(photoRef);
}