interface Count {
    a: number;
    b: number;
}

const count = ({ a, b }: Count): number => {
    return a + b;
};

export default count;
