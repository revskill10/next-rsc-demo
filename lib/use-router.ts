import { match } from "path-to-regexp"

const useRouter = pattern => async ({ req }) => {
    const fn = match(pattern, { decode: decodeURIComponent });
    const result = fn(req.url)
    if (result === false) return {
        props: {
            initialRouter: { route: req.url }
        }
    }
    return {
        props: {
            initialRouter: result
        }
    }
}

export default useRouter