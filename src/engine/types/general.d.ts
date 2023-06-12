interface IRenderable {
    name: string
    position: Position
}

interface IRenderResource {}

interface RendererConfig {
    width: number
    height: number
}

interface GameConfig {
    deltaTime: number
    fps: number
}
