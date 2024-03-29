'use client'

// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Head from 'next/head';
// import Link from 'next/link';
import Video from 'next-video';
import { Button, Form } from "react-bootstrap";

import MainLogo from '../../public/images/FitStaX_Main.webp'
import introVid from '../../videos/intro_video2.mp4'
import Image from 'next/image';

import learnWorkout from '../../public/images/learnworkout.jpg'
import workout1 from '../../public/images/workout1.jpg'
import workout2 from '../../public/images/workout3.webp'
import poseWorkout from '../../public/images/poseworkout.jpg'
import groupworkout1 from '../../public/images/groupworkout1.jpg'
import workout5 from '../../public/images/workout5.webp'
import ropesworkout from '../../public/images/ropesworkout.jpg'
import group3 from '../../public/images/group3.jpg'

import powderOne from '../../public/images/powderOne.webp'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Page</title>
        <meta name="description" content="Fitness Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <ul>
          <ol><Link href="/">Home</Link></ol>
          <ol><Link href="/abopt">About</Link></ol>
          <ol><Link href="/industry">Industry</Link></ol>
          <ol><Link href="/programs">Programs</Link></ol>
          <ol><Link href="/products">Products</Link></ol>
          <ol><Link href="/contact">Contact</Link></ol>
        </ul>
      </nav>

      <header >
        <div className={styles.mainTitle}>
          <h1>We</h1>
          <h1>Are</h1>
          <h1>FitStaX</h1>
          <Button variant="outline-primary">
            Get Started
          </Button>
        </div>

        <Video src={introVid}
          // autoPlay
          // muted
          loop
          controls
          playsInline
          accentColor="rgb(0, 225, 255)"
        />
      </header>

      <main className={styles.main}>
        <div className={styles.boxOne}>
          {/* Your content goes here */}
          <h1 className={styles.title}>Welcome to FitStaX</h1>
          <Image className={styles.mainLogo} src={MainLogo} height={400} width={400} alt="main vet logo" />

          <div className={styles.innerBoxOneContents}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis maxime quo facere eos aliquid, tempora ad amet? Neque harum repellat obcaecati deleniti eligendi aut. Sed laborum rem magnam quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis maxime quo facere eos aliquid, tempora ad amet? Neque harum repellat obcaecati deleniti eligendi aut. Sed laborum rem magnam quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis maxime quo facere eos aliquid, tempora ad amet? Neque harum repellat obcaecati deleniti eligendi aut. Sed laborum rem magnam quam.
            </p>
          </div>
        </div>

        <div className={styles.boxTwo}>
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id doloribus, praesentium ea quibusdam illum nisi aut quos sapiente aliquam maiores accusantium, impedit possimus rem quasi quas amet provident, explicabo iste.</p> */}
          <div className={styles.innerBoxWorkouts}>
            <Image className={styles.workouts} src={workout1} alt="" />
            <Image className={styles.workouts} src={workout2} alt="" />
            <Image className={styles.workouts} src={groupworkout1} alt="" />
          </div>
          <div className={styles.innerBoxWorkouts}>
            <Image className={styles.workouts} src={workout5} alt="" />
            <Image className={styles.workouts} src={learnWorkout} alt="" />
            <Image className={styles.workouts} src={ropesworkout} alt="" />
          </div>
        </div>

        <section className={styles.boxThree}>
          <div className={styles.contentCards}>
            <h1>Members</h1>
            <Image className={styles.contentDescription} src={poseWorkout} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam rerum, molestias autem illum eius voluptas, dolorem quas ab laboriosam magnam earum, iste quaerat libero doloremque odit in? Voluptate, nisi?</p>
            <Button>Check Out</Button>
          </div>
          <div className={styles.contentCards}>
            <h1>Products</h1>
            <Image className={styles.contentDescription} src={powderOne} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam rerum, molestias autem illum eius voluptas, dolorem quas ab laboriosam magnam earum, iste quaerat libero doloremque odit in? Voluptate, nisi?</p>
            <Link href='/products'>
              <Button>Check Out</Button>
            </Link>
          </div>
          <div className={styles.contentCards}>
            <h1>Programs</h1>
            <Image className={styles.contentDescription} src={group3} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam rerum, molestias autem illum eius voluptas, dolorem quas ab laboriosam magnam earum, iste quaerat libero doloremque odit in? Voluptate, nisi?</p>
            <Button>Check Out</Button>
          </div>
        </section>

        <div className={styles.contactForm}>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" type="text" placeholder="John" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" type="text" placeholder="Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="xxx-xxx-xxxx" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="text" placeholder="example@email.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" placeholder="How can I help?" />
            </Form.Group>
            {/* <Button type="submit" disabled={isSubmitting} >
                {isSubmitting ? 'Sending...' : 'Send'}
            </Button> */}
          </Form>
        </div>

      </main>

      <footer className={styles.footer}>
        <div>
          <p>instagram</p>
          <p>facebook</p>
          <p>pinterest</p>
          <p>tiktok</p>
        </div>

        <div>
          <p>more footer stuff</p>
        </div>
      </footer>
    </div>

  );
}
