import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections';

import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding bg-pale-blue">
      <SpecialOffer/>
    </section>
    <section className="padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 pt-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;