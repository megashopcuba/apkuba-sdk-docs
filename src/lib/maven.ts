export async function getLatestVersion(
  repo: string,
  groupId: string,
  artifactId: string
): Promise<string> {
  const metadata = `${repo}/${groupId.replace(/\./g, "/")}/${artifactId}/maven-metadata.xml`;

  try {
    const xml = await fetch(metadata).then((r) => r.text());

    return (
      xml.match(/<release>(.*?)<\/release>/)?.[1] ??
      xml.match(/<latest>(.*?)<\/latest>/)?.[1] ??
      "latest"
    );
  } catch {
    return "latest";
  }
}