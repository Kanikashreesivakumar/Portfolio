"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Preload, Stars } from "@react-three/drei"
import * as THREE from "three"

function SpaceEnvironment() {
  const starsRef = useRef<THREE.Points>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
     
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(({ clock }) => {
    if (starsRef.current) {
      const t = clock.getElapsedTime() * 0.05
      starsRef.current.rotation.y = t
      starsRef.current.rotation.x = mousePosition.y * 0.05
      starsRef.current.rotation.z = mousePosition.x * 0.05
    }
  })

  return (
    <group>
      <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <DistantPlanets />
      <Nebula />
    </group>
  )
}

function DistantPlanets() {
  const planetsRef = useRef<THREE.Group>(null)
  const planets = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const radius = 1 + Math.random() * 2
      const distance = 30 + Math.random() * 70
      const angle = Math.random() * Math.PI * 2
      const speed = 0.05 - Math.random() * 0.03
      const x = Math.sin(angle) * distance
      const z = Math.cos(angle) * distance
      const y = (Math.random() - 0.5) * 40

      return { radius, x, y, z, speed, angle }
    })
  }, [])

  useFrame(({ clock }) => {
    if (planetsRef.current) {
      const t = clock.getElapsedTime()
      planetsRef.current.rotation.y = t * 0.01
    }
  })

  return (
    <group ref={planetsRef}>
      {planets.map((planet, i) => (
        <mesh key={i} position={[planet.x, planet.y, planet.z]}>
          <sphereGeometry args={[planet.radius, 32, 32]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Nebula() {
  const nebulaRef = useRef<THREE.Mesh>(null)
  const nebulaTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext("2d")
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)")
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 256, 256)
    }
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  const nebulae = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => {
      const scale = 20 + Math.random() * 30
      const distance = 40 + Math.random() * 60
      const angle = Math.random() * Math.PI * 2
      const x = Math.sin(angle) * distance
      const z = Math.cos(angle) * distance
      const y = (Math.random() - 0.5) * 40
      const rotation = Math.random() * Math.PI * 2

      return { scale, x, y, z, rotation }
    })
  }, [])

  useFrame(({ clock }) => {
    if (nebulaRef.current) {
      const t = clock.getElapsedTime() * 0.1
      nebulaRef.current.rotation.y = t
    }
  })

  return (
    <group ref={nebulaRef}>
      {nebulae.map((nebula, i) => (
        <mesh key={i} position={[nebula.x, nebula.y, nebula.z]} rotation={[0, nebula.rotation, 0]}>
          <planeGeometry args={[nebula.scale, nebula.scale]} />
          <meshBasicMaterial
            map={nebulaTexture}
            transparent
            opacity={0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function Hand() {
  const handRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to range [-1, 1]
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(({ clock }) => {
    if (handRef.current) {
  
      const t = clock.getElapsedTime()
      handRef.current.rotation.y = Math.sin(t * 0.2) * 0.2
      handRef.current.rotation.z = Math.sin(t * 0.1) * 0.1

   
      handRef.current.rotation.x = mousePosition.y * 0.1
      handRef.current.rotation.y += mousePosition.x * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={handRef} position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]}>
      
       
      
      </group>
    </Float>
  )
}

function Particles() {
  const particleCount = 300
  const particlesRef = useRef<THREE.Points>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 25
      positions[i3 + 1] = (Math.random() - 0.5) * 25
      positions[i3 + 2] = (Math.random() - 0.5) * 25

      // White particles with varying brightness
      const brightness = 0.5 + Math.random() * 0.5
      colors[i3] = brightness
      colors[i3 + 1] = brightness
      colors[i3 + 2] = brightness

      // Random sizes
      sizes[i] = Math.random() * 0.2 + 0.1
    }

    return { positions, colors, sizes }
  }, [particleCount])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const t = clock.getElapsedTime()

      // Base rotation
      particlesRef.current.rotation.y = t * 0.05

      // Subtle movement based on mouse position
      particlesRef.current.rotation.x = mousePosition.y * 0.1
      particlesRef.current.rotation.z = mousePosition.x * 0.1

      // Update particle positions for a flowing effect
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // Add subtle movement to each particle
        positions[i3] = x + Math.sin(t + i) * 0.01
        positions[i3 + 1] = y + Math.cos(t + i) * 0.01
        positions[i3 + 2] = z + Math.sin(t * 0.5 + i) * 0.01
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlesPosition.positions}
          itemSize={3}
          args={[particlesPosition.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particlesPosition.colors}
          itemSize={3}
          args={[particlesPosition.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particlesPosition.sizes}
          itemSize={1}
          args={[particlesPosition.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="white" />
      <SpaceEnvironment />
      <Hand />
      <Particles />
    </>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Scene />
        <Preload all />
      </Canvas>
    </div>
  )
}
