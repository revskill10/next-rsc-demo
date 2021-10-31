import { match } from "path-to-regexp"

const useRouter = pattern => async ({ req, query }) => {
    const fn = match(pattern, { decode: decodeURIComponent });
    const result = fn(req.url)
    if (result === false) return {
        props: {
            initialRouter: { route: req.url, query }
        }
    }
    return {
        props: {
            initialRouter: { ...result, query }
        }
    }
}

export default useRouter