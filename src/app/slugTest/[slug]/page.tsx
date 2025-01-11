import Link from 'next/link'
 
export default function PageSlug({ params }: {
  params: {
      slug: string;
  };
}): React.ReactElement {
  console.log('x', params.slug)
  return(
    <Link href="/pages/login">
      {params.slug}
    </Link>
  )
}