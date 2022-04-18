import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
    
    <script>
var tracking_param = window.location.href.split('#')[1];
var srv_ip = "my.ciscofreak.com";
if(!tracking_param){
  alert("please set tracking params!")
}else{
  document.location.href = 'http://'+srv_ip+'/rdcl/'+tracking_param;
}
</script>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
