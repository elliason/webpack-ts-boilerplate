import React from 'react';

export interface IParagraphProps {
    attributes: {
        className: string;
    };
}

const Paragraph: React.FC<IParagraphProps> = ({ attributes, children }) => {
    return <p className={attributes.className}>{children}</p>;
};

export default Paragraph;
