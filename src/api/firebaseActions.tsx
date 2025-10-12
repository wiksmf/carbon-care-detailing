import {
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
  collection,
  DocumentReference,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/config";

import type {
  BlogPost,
  Certification,
  GalleryPhotos,
  GalleryPhoto,
} from "../types/api";

function slugifyPolish(title: string): string {
  const polishMap: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ż: "z",
    ź: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ż: "Z",
    Ź: "Z",
  };

  return title
    .split("")
    .map((c) => polishMap[c] || c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function addCertification(file: File, alt: string) {
  try {
    const fileRef = ref(storage, `certifications/${Date.now()}-${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    await addDoc(collection(db, "certifications"), {
      src: url,
      alt,
      createdAt: new Date(),
    } satisfies Certification);

    return { success: true };
  } catch (error) {
    console.error("Error adding certification:", error);
    return {
      success: false,
      error: "Nie udało się dodać certyfikatu.",
    };
  }
}

export async function updateCertification(id: string, newAlt: string) {
  try {
    const certRef = doc(db, "certifications", id);
    await updateDoc(certRef, { alt: newAlt });

    return { success: true };
  } catch (error) {
    console.error("Error updating certification:", error);
    return {
      success: false,
      error: "Nie udało się zaktualizować certyfikatu.",
    };
  }
}

export async function removeCertification(id: string) {
  try {
    const certRef = doc(db, "certifications", id);
    await deleteDoc(certRef);

    return { success: true };
  } catch (error) {
    console.error("Error removing certification:", error);
    return {
      success: false,
      error: "Nie udało się usunąć certyfikatu.",
    };
  }
}

export async function addGallery(
  name: string,
  mainPhoto: File,
  photos: File[],
) {
  try {
    const galleryId = slugifyPolish(name);

    // Upload main photo
    const mainRef = ref(storage, `gallery/${Date.now()}-${mainPhoto.name}`);
    await uploadBytes(mainRef, mainPhoto);
    const mainUrl = await getDownloadURL(mainRef);

    // Create gallery doc
    const galleryRef = await addDoc(collection(db, "gallery"), {
      id: galleryId,
      name,
      mainPhoto: mainUrl,
      createdAt: new Date(),
    } satisfies GalleryPhotos);

    // Upload additional photos
    for (const photo of photos) {
      const photoRef = ref(
        storage,
        `gallery/${galleryId}/${Date.now()}-${photo.name}`,
      );
      await uploadBytes(photoRef, photo);
      const url = await getDownloadURL(photoRef);

      await addDoc(collection(db, `gallery/${galleryRef.id}/photos`), {
        src: url,
        createdAt: new Date(),
      } satisfies GalleryPhoto);
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding gallery:", error);
    return { success: false, error: "Nie udało się dodać galerii." };
  }
}

export async function updateGallery(
  galleryId: string,
  name: string,
  mainPhotoFile?: File,
  existingPhotoIds: string[] = [],
  newPhotos: File[] = [],
) {
  try {
    const snapshot = await getDocs(
      query(collection(db, "gallery"), where("id", "==", galleryId)),
    );

    if (snapshot.empty) throw new Error("Galeria nie znaleziona");

    const galleryDoc = snapshot.docs[0];
    let mainPhotoUrl = galleryDoc.data().mainPhoto as string;

    // Upload new main photo if provided
    if (mainPhotoFile) {
      const mainRef = ref(
        storage,
        `gallery/${galleryId}/main-${Date.now()}-${mainPhotoFile.name}`,
      );

      await uploadBytes(mainRef, mainPhotoFile);
      mainPhotoUrl = await getDownloadURL(mainRef);
    }

    // Remove deleted photos
    const photosSnapshot = await getDocs(
      collection(db, `gallery/${galleryDoc.id}/photos`),
    );

    for (const docSnap of photosSnapshot.docs) {
      if (!existingPhotoIds.includes(docSnap.id)) {
        await deleteDoc(docSnap.ref);
      }
    }

    // Add new photos
    for (const photo of newPhotos) {
      const photoRef = ref(
        storage,
        `gallery/${galleryId}/${Date.now()}-${photo.name}`,
      );
      await uploadBytes(photoRef, photo);
      const url = await getDownloadURL(photoRef);

      await addDoc(collection(db, `gallery/${galleryDoc.id}/photos`), {
        src: url,
        createdAt: new Date(),
      } satisfies GalleryPhoto);
    }

    // Update gallery info
    await updateDoc(galleryDoc.ref as DocumentReference, {
      id: slugifyPolish(name),
      name,
      mainPhoto: mainPhotoUrl,
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating gallery:", error);
    return { success: false, error: "Nie udało się zaktualizować galerii." };
  }
}

export async function removeGallery(galleryId: string) {
  try {
    const snapshot = await getDocs(
      query(collection(db, "gallery"), where("id", "==", galleryId)),
    );

    if (snapshot.empty) throw new Error("Galeria nie znaleziona");

    for (const docSnap of snapshot.docs) {
      await deleteDoc(docSnap.ref);
    }

    return { success: true };
  } catch (error) {
    console.error("Error removing gallery:", error);
    return { success: false, error: "Nie udało się usunąć galerii." };
  }
}

export async function addPost(title: string, content: string) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      id: slugifyPolish(title),
      title,
      content,
      createdAt: new Date(),
    } satisfies BlogPost);

    const docSnap = await getDoc(docRef);
    return {
      success: true,
      post: { id: docSnap.id, ...docSnap.data() } as BlogPost,
    };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, error: "Nie udało się dodać posta." };
  }
}

export async function updatePost(id: string, title: string, content: string) {
  try {
    const snapshot = await getDocs(
      query(collection(db, "posts"), where("id", "==", id)),
    );

    if (snapshot.empty) throw new Error("Artykuł nie znaleziony");

    for (const docSnap of snapshot.docs) {
      await updateDoc(docSnap.ref, {
        id: slugifyPolish(title),
        title,
        content,
        createdAt: new Date(),
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Nie udało się zaktualizować posta." };
  }
}

export async function removePost(id: string) {
  try {
    const snapshot = await getDocs(
      query(collection(db, "posts"), where("id", "==", id)),
    );

    if (snapshot.empty) throw new Error("Artykuł nie znaleziony");

    for (const docSnap of snapshot.docs) {
      await deleteDoc(docSnap.ref);
    }

    return { success: true };
  } catch (error) {
    console.error("Error removing post:", error);
    return { success: false, error: "Nie udało się usunąć posta." };
  }
}
