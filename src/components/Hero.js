import React from 'react';

const Hero = ({children, hero}) => {

    const ggg = (str) => {

        if (str.length === 1) {
            return [str]
        }

        const arr = [];

        for (let i = 0; i < str.length; i++) {

            console.log(`STR = ${str} ${i}`);

            const variants = ggg(str.slice(0, i) + str.slice(i + 1));

            console.log(`VARIANTS MASSIV = ${variants} ${i}`)

            for (const variant of variants) {
                console.log(`VARIANT = ${variant} ${i}`)

                if (!arr.includes(str[i] + variant)) {
                    arr.push(str[i] + variant)
                    console.log(arr)
                }
            }

        }

        return arr;

    }

    console.log(ggg('ABCD'))


    return (
        <header className={hero}>
            {children}
        </header>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;

