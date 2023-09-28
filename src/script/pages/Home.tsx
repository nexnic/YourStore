
import useApi from '../api/api';




export default function HomePage() {


    const { data, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435',
      );
      console.log(data)
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>
    return <div>test</div>
}