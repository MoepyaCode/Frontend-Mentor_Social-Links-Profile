import { Container, Main, Wrapper } from './components'

export default function App() {

  function profileLinks() {
    const data: string[] = [
      'Github',
      'Frontend Mentor',
      'Linkedin',
      'Twitter',
      'Instagram',
    ]

    return (
      <ul className='flex flex-col gap-[12px]'>
        {data.map((profile, index) => (
          <li key={index} className='text-white text-sm grid place-items-center font-bold w-[304px] h-[45px] bg-primaryGray rounded-[8px] hover:bg-neon-green hover:text-primaryGray'>{profile}</li>
        ))}
      </ul>
    )
  }


  return (
    <Main className='bg-black grid place-items-center min-w-full'>
      <Container className='bg-secondaryBg max-w-[384px] min-h-[611px] w-[90%] rounded-[12px] flex flex-col flex-nowrap justify-evenly items-center gap-[24px] p-[24px] sm:p-[40px]'>

        <img className='rounded-full w-[88px] aspect-square' src="images/challenge/avatar-jessica.jpeg" alt="avatar-jessica" />

        <Wrapper>
          <h1 className='text-white text-center text-[1.6rem] font-semibold'>Jessica Randall</h1>
          <p className='text-neon-green text-center text-sm font-bold'>London, United Kingdom</p>
        </Wrapper>

        <p className='text-white font-normal text-sm'>"Front-end developer and avid reader."</p>

        {/* Social Links Profile */}
        {profileLinks()}

      </Container>
    </Main>
  )
}
