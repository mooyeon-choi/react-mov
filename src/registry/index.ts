export interface ComponentRegistry {
  name: string
  type: "components:ui" | "components:example" | "components:block"
  registryDependencies?: string[]
  dependencies?: string[]
  devDependencies?: string[]
  files: string[]
}

export interface ComponentFile {
  name: string
  content: string
}

export const registry: ComponentRegistry[] = []

export async function getComponent(name: string): Promise<ComponentFile[]> {
  const component = registry.find((c) => c.name === name)
  if (!component) {
    throw new Error(`Component ${name} not found in registry`)
  }

  const files: ComponentFile[] = []

  for (const file of component.files) {
    const module = await import(`./components/${name}/${file}`)
    files.push({
      name: file,
      content: module.default || module.content || ""
    })
  }

  return files
}