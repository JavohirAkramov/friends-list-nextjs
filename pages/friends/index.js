import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Friends.module.css"

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()

  return {
    props: { friends: data }
  }
}

const Friends = ({ friends }) => {
  return (
    <>
      <Head>
        <title>Friends list | Friends list</title>
      </Head>
      <div>
        <h1>All friends</h1>
        {
          friends.map(friend => (
            <Link href={'/friends/' + friend.id} key={friend.id}>
              <a className={styles.single}>
                <h3>{friend.name}</h3>
              </a>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Friends;