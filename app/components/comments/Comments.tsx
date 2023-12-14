"use client";

import { useEffect, useRef } from "react";

export default function Comments({ postSlug }: { postSlug: string }) {
  const commentBoxRef = useRef<any>(null);

  useEffect(() => {
    const commentScript = document.createElement("script");
    // Optional: It is possible to use light/dark themes in the comment box
    const theme = "github-light";
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    // CHANGE REPO VAlUE if you are going to use the code.
    // Please do not test your code using other's repos.
    commentScript.setAttribute("repo", "SofieTorch/gdg-cochabamba-blog");
    commentScript.setAttribute("issue-term", postSlug);
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("theme", theme);
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBoxRef && commentBoxRef.current) {
      commentBoxRef.current.appendChild(commentScript);
    } else {
      console.error(`Error adding utterances comments on: ${commentBoxRef}`);
    }
  }, []);

  return <div ref={commentBoxRef} />;
}
