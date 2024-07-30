import { Center, Flex, Space, Text } from '@mantine/core';

export const Footer = () => {


    return (
        <Text component='footer' ta="center">
            <Flex gap={16} justify={'center'} align="center">
                <a aria-label="Twitter" href='https://twitter.com/SimRailFR'>
                    <Center>
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Twitter Logo</title>
                            <path d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" fill="white" />
                        </svg>
                    </Center>
                </a>
                <a aria-label="Instagram" href='https://www.instagram.com/simrailfr/'>
                    <Center>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram Logo</title>
                            <path d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z" fill="white" />
                        </svg>
                    </Center>

                </a>
                <a aria-label="Discord" href='https://discord.gg/simrail'>
                    <Center>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Discord Logo</title>
                            <path d="M20.307 1.49591C18.787 0.798593 17.1412 0.292475 15.4269 5.17344e-05C15.4119 -0.00042132 15.3969 0.00235455 15.3831 0.00818421C15.3693 0.0140139 15.3569 0.0227558 15.3469 0.0337931C15.1412 0.404946 14.9012 0.888569 14.7412 1.25972C12.9228 0.989793 11.0736 0.989793 9.2553 1.25972C9.09529 0.877322 8.85529 0.404946 8.63814 0.0337931C8.62671 0.011299 8.59242 5.17344e-05 8.55814 5.17344e-05C6.8438 0.292475 5.20947 0.798593 3.678 1.49591C3.66657 1.49591 3.65515 1.50716 3.64372 1.5184C0.53506 6.09596 -0.322107 10.5498 0.100762 14.9586C0.100762 14.9811 0.112191 15.0036 0.135048 15.0149C2.19225 16.4995 4.16945 17.3992 6.12378 17.9953C6.15807 18.0066 6.19236 17.9953 6.20379 17.9728C6.66094 17.3543 7.07238 16.7019 7.42668 16.0159C7.44954 15.9709 7.42668 15.9259 7.38096 15.9146C6.72952 15.6672 6.11236 15.3748 5.50662 15.0374C5.46091 15.0149 5.46091 14.9474 5.4952 14.9136C5.62091 14.8237 5.74663 14.7224 5.87235 14.6325C5.89521 14.61 5.92949 14.61 5.95235 14.6212C9.88389 16.387 14.124 16.387 18.0098 14.6212C18.0327 14.61 18.067 14.61 18.0898 14.6325C18.2155 14.7337 18.3413 14.8237 18.467 14.9249C18.5127 14.9586 18.5127 15.0261 18.4556 15.0486C17.8612 15.3973 17.2327 15.6784 16.5812 15.9259C16.5355 15.9371 16.5241 15.9934 16.5355 16.0271C16.9012 16.7132 17.3127 17.3655 17.7584 17.9841C17.7927 17.9953 17.827 18.0066 17.8612 17.9953C19.827 17.3992 21.8042 16.4995 23.8614 15.0149C23.8843 15.0036 23.8957 14.9811 23.8957 14.9586C24.3986 9.86372 23.0614 5.44363 20.3527 1.5184C20.3413 1.50716 20.3299 1.49591 20.307 1.49591ZM8.02098 12.2706C6.8438 12.2706 5.86092 11.2021 5.86092 9.88621C5.86092 8.57031 6.82095 7.50184 8.02098 7.50184C9.23244 7.50184 10.1925 8.58155 10.181 9.88621C10.181 11.2021 9.22101 12.2706 8.02098 12.2706ZM15.9869 12.2706C14.8097 12.2706 13.8269 11.2021 13.8269 9.88621C13.8269 8.57031 14.7869 7.50184 15.9869 7.50184C17.1984 7.50184 18.1584 8.58155 18.147 9.88621C18.147 11.2021 17.1984 12.2706 15.9869 12.2706Z" fill="white" />
                        </svg>
                    </Center>
                </a>

            </Flex>
            <Space h="sm" />
            <Text component='span' mt='18px' size='13px' >Website created by the french community of SimRail</Text>
            <Space h="lg" />
        </Text >
    )

}
