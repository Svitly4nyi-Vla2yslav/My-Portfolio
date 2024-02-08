import { Container, Link } from "./Resume.styled"

const Resume = () => {
    return (
        <Container>
            <Link
                href="https://drive.google.com/file/d/17g1jCN4jM9YsgwWspc1apEfJ53_w6bOs/view?usp=sharing"
            >
                Download CV
            </Link>
            <Link
                href='https://drive.google.com/file/d/16D179v6Hvdi0UrjCJghhLy6Tkdw_OBVR/view?usp=sharing'>
                Lebenslauf </Link>
            <Link href="https://drive.google.com/file/d/1GO_wwl3V_aJU3Any7DoCKl1za5B6QUtC/view?usp=sharing">
                Certificate </Link>
        </Container>
    )
}

export default Resume;