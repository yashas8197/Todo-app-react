import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header/>
        <main className='container py-4'>
          <h2>About Todos</h2>
          <p>We are a team passionate about productivity, organization, and making life simpler. Our mission is to provide you with a seamless platform to manage your tasks, prioritize your goals, and stay focused on what truly matters.</p>

          <p>At Todos, we understand the challenges of balancing work, personal life, and everything in between. That's why we've created an intuitive and user-friendly todo list application designed to streamline your daily routines and help you achieve more with less stress.</p>

          <p>Our platform offers a range of features to cater to your unique needs:</p>

          <ul>
          <li>Task Management: Easily create, edit, and organize your tasks with our intuitive interface.</li>
          <li>Priority Setting: Stay on top of your most important tasks by assigning priorities and deadlines.</li>
          <li>Collaboration: Share tasks and collaborate with team members, friends, or family to accomplish goals together.</li>
          <li>Reminders: Set reminders and notifications to ensure you never miss a deadline or appointment.</li>
          <li>Accessibility: Access your todo list anytime, anywhere, from any device.</li>
           
            </ul>

          <p>Whether you're a busy professional, a student juggling multiple assignments, or simply someone looking to stay organized, [Your Website Name] is here to support you on your journey towards greater productivity and fulfillment.</p>
          <p>Join us today and take control of your tasks, one todo at a time!</p>
        </main>
      
      <Footer/>
    </>
  )
}

export default About;