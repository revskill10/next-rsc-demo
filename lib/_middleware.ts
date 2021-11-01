import { NextResponse } from 'next/server'
import { match } from "path-to-regexp"

export function middleware (request) {
  const fn = match('/pokemon/:pokemonId', { decode: decodeURIComponent });
  const result = fn(request.nextUrl.pathname)
  console.log('result', result)
  if (result) {
      return NextResponse.rewrite(`/demo/pokemon?articleId=${(result.params as any)?.pokemonId}`)
  } else {
    return NextResponse.next()
  }
}