
// WordPress Composables * A collection of WordPress composable functions.
export function useWpApi() {
  // Hardcodeamos la URL directamente
  const wpUri = "http://gestion.tamawiki.com";
  
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(1);
  
  // general 
  const get = async <T>(endpoint: string) => {
    const response = await fetch(`${wpUri}/wp-json/wp/v2/${endpoint}`);
    const data = await response.json();
    return { data, response };
  };
    

  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 10,
  ): Promise<T[]> => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    const { data, response } = await get<T[]>(query);
    if (response && response.headers) {
      totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    }
    return data;
  };

  //ultimos 4 post para Home
  const getPostsHome = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 4,  // Cambia este valor a 4
  ): Promise<T[]> => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    const { data, response } = await get<T[]>(query);
    if (response && response.headers) {
      totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    }
    return data;
  };

  //ultimos 3 post Categoria Comida
  const getCatComida = async <T>(
      categories?: number,
      page: number = 1,
      perPage: number = 3,  // Cambia este valor a 4
    ): Promise<T[]> => {
      let query = `posts?_embed&per_page=${perPage}&page=${page}`;
      if (categories) {
        query += `&categories=${categories}`;
      }
      const { data, response } = await get<T[]>(query);
      if (response && response.headers) {
        totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
      }
      return data;
    };

  //ultimos 3 post Categoria Armas
  const getCatArmas = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 3,  // Cambia este valor a 4
  ): Promise<T[]> => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    const { data, response } = await get<T[]>(query);
    if (response && response.headers) {
      totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    }
    return data;
  };

   //ultimos 3 post Categoria Comida
  const getCatElixir = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 3,  // Cambia este valor a 4
  ): Promise<T[]> => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    const { data, response } = await get<T[]>(query);
    if (response && response.headers) {
      totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    }
    return data;
  };




//paginacion
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };


// single post
const getPost = async <T>(slug: string) => {
  const { data } = await get<T>(`posts?slug=${slug}&_embed`);
  return data[0];  // Ya que la API de WordPress devuelve un array, tomamos el primer elemento
};

// todas las categorias
const getCategories = async <T> () => {
  const { data, response } = await get<T>("categories");
  /* console.log("Categorías recibidas:", data); */  // Agregar esta línea para depuración
  return data;
};

const getCategoryIdBySlug = async (slug: string): Promise<number> => {
  const category = await getCategory(slug);
  return category.id;
};
  
const getCategory = async <T>(slug: string): Promise<T> => {
  const { data } = await get<T[]>(`categories?slug=${slug}`);
  return data[0];
};

  return {
    get,
    getPosts,
    getPost,
    getPostsHome,
    getCategoryIdBySlug,
    getCategories,
    getCategory,
    getCatComida,
    getCatArmas,
    getCatElixir,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  };
};
