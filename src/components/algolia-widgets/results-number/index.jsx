import React from "react";

import { connectStateResults } from "react-instantsearch-dom";

import ParagraphTitle from "../../paragraph-title";

const NumberOfResults = connectStateResults(({ searchResults }) => (
    <ParagraphTitle>
        {searchResults && searchResults.nbHits
            ? `${searchResults.nbHits} results:`
            : "No results found"}
    </ParagraphTitle>
));

export default NumberOfResults;
