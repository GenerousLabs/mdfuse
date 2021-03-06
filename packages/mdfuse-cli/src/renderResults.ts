import { Fuse, colours } from "../deps.ts";
import { IndexEntry } from "../types.ts";

export const renderResults = (results: Fuse.FuseResult<IndexEntry>[]) => {
  console.log(`#aVQzHm Found ${results.length} results`);
  results.forEach(({ item }) => {
    console.log(colours.green(`Result found in ${item.file.path}`));
    console.log(item.segment.content);
  });
};
