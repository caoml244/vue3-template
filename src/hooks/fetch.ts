import { ref } from 'vue'

export function useFetch(url: String) {
  const data = ref(null)
  const error = ref(null)
  console.log(url)
  // request(url)
  //   .then((res) => res.json())
  //   .then((json) => (data.value = json))
  //   .catch((err) => (error.value = err))

  return { data, error }
}
