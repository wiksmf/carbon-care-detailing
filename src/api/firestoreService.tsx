import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase/config";

export async function getCertifications() {
  try {
    const q = query(
      collection(db, "certifications"),
      orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(q);
    const certifications = snapshot.docs.map((doc) => ({
      id: doc.id,
      src: doc.data().src,
      alt: doc.data().alt,
      createdAt: doc.data().createdAt ?? null,
    }));

    return { success: true, data: certifications, error: null };
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return {
      success: false,
      data: [],
      error: "Nie udało się pobrać certyfikatów.",
    };
  }
}

export async function getMostRecentCar() {
  try {
    const q = query(
      collection(db, "gallery"),
      orderBy("createdAt", "desc"),
      limit(1),
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) return { success: true, data: null, error: null };

    const doc = snapshot.docs[0];
    return { success: true, data: { id: doc.id, ...doc.data() }, error: null };
  } catch (error) {
    console.error("Error fetching most recent car:", error);
    return {
      success: false,
      data: null,
      error: "Nie udało się pobrać najnowszego samochodu.",
    };
  }
}

export async function getFirst7PhotosOfMostRecentCar() {
  try {
    const car = await getMostRecentCar();
    if (!car?.data) return { success: true, data: [], error: null };

    const galleryId = car.data.id;
    const galleryQuery = query(
      collection(db, "gallery"),
      where("id", "==", galleryId),
    );
    const gallerySnap = await getDocs(galleryQuery);

    if (gallerySnap.empty) {
      console.warn(`No gallery found with id: ${galleryId}`);
      return { success: true, data: [], error: null };
    }

    const galleryDocRef = gallerySnap.docs[0].ref;
    const photosRef = collection(galleryDocRef, "photos");
    const photosQuery = query(
      photosRef,
      orderBy("createdAt", "desc"),
      limit(7),
    );

    const photosSnap = await getDocs(photosQuery);
    const photos = photosSnap.docs.map((doc) => ({
      id: doc.id,
      src: doc.data().src ?? "",
      createdAt: doc.data().createdAt ?? null,
    }));

    return { success: true, data: photos, error: null };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return { success: false, data: [], error: "Nie udało się pobrać zdjęć." };
  }
}

export async function getGallery() {
  try {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const gallery = snapshot.docs.map((doc) => ({
      id: doc.data().id,
      name: doc.data().name,
      mainPhoto: doc.data().mainPhoto,
      createdAt: doc.data().createdAt,
    }));

    return { success: true, data: gallery, error: null };
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return {
      success: false,
      data: [],
      error: "Nie udało się pobrać galerii.",
    };
  }
}

export async function getCarPhotos(galleryId: string) {
  try {
    const galleryQuery = query(
      collection(db, "gallery"),
      where("id", "==", galleryId),
    );
    const gallerySnap = await getDocs(galleryQuery);

    if (gallerySnap.empty) {
      console.warn(`No gallery found with id: ${galleryId}`);
      return { success: true, data: [], error: null };
    }

    const galleryDocRef = gallerySnap.docs[0].ref;
    const photosRef = collection(galleryDocRef, "photos");
    const photosQuery = query(photosRef, orderBy("createdAt", "desc"));
    const photosSnap = await getDocs(photosQuery);
    const photos = photosSnap.docs.map((doc) => ({
      id: doc.id,
      src: doc.data().src ?? "",
      createdAt: doc.data().createdAt ?? null,
    }));

    return { success: true, data: photos, error: null };
  } catch (error) {
    console.error(`Error fetching photos for gallery ID ${galleryId}:`, error);
    return {
      success: false,
      data: [],
      error: "Nie udało się pobrać zdjęć samochodów.",
    };
  }
}

export async function getPosts() {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.data().id,
      title: doc.data().title,
      content: doc.data().content,
      createdAt: doc.data().createdAt?.toDate?.()
        ? doc.data().createdAt.toDate().toISOString()
        : null,
    }));

    return { success: true, data: posts, error: null };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      success: false,
      data: [],
      error: "Nie udało się pobrać artykułów.",
    };
  }
}

export async function getPost(postId: string) {
  try {
    const q = query(
      collection(db, "posts"),
      where("id", "==", postId),
      limit(1),
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) return { success: true, data: null, error: null };

    const doc = snapshot.docs[0];
    const post = {
      id: doc.data().id,
      title: doc.data().title,
      content: doc.data().content,
      createdAt: doc.data().createdAt?.toDate?.()
        ? doc.data().createdAt.toDate().toISOString()
        : null,
    };

    return { success: true, data: post, error: null };
  } catch (error) {
    console.error(`Error fetching post ${postId}:`, error);
    return {
      success: false,
      data: null,
      error: "Nie udało się pobrać artykułu.",
    };
  }
}
