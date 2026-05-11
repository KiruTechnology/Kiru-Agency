// // 3D Hero Scene using Three.js
// class Hero3DScene {
//   constructor() {
//     this.canvas = document.getElementById("heroCanvas");
//     if (!this.canvas) return;

//     this.scene = new THREE.Scene();
//     this.scene.background = new THREE.Color(0xf7f5f0);

//     this.camera = new THREE.PerspectiveCamera(
//       75,
//       this.canvas.clientWidth / this.canvas.clientHeight,
//       0.1,
//       1000,
//     );
//     this.camera.position.set(0, 0, 8);

//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.canvas,
//       antialias: true,
//       alpha: true,
//     });
//     this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     this.renderer.shadowMap.enabled = true;

//     // Lighting
//     this.setupLighting();

//     // Create scene elements
//     this.createCentralLogo();
//     this.createCards();
//     this.createConnections();
//     this.createLabels();

//     // Animation setup
//     this.time = 0;
//     this.hoveredCard = null;
//     this.raycaster = new THREE.Raycaster();
//     this.mouse = new THREE.Vector2();

//     // Event listeners
//     window.addEventListener("resize", () => this.onWindowResize());
//     this.canvas.addEventListener("mousemove", (e) => this.onMouseMove(e));

//     // Start animation loop
//     this.animate();
//   }

//   setupLighting() {
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     this.scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0xe8a020, 0.8);
//     pointLight.position.set(5, 5, 5);
//     pointLight.castShadow = true;
//     this.scene.add(pointLight);

//     const pointLight2 = new THREE.PointLight(0xffffff, 0.4);
//     pointLight2.position.set(-5, -5, 3);
//     this.scene.add(pointLight2);
//   }

//   createCentralLogo() {
//     // Create central "K" logo as a geometric shape
//     const geometry = new THREE.BoxGeometry(1.2, 1.8, 0.3);
//     const material = new THREE.MeshStandardMaterial({
//       color: 0x0d1b2a,
//       metalness: 0.3,
//       roughness: 0.4,
//     });

//     this.logo = new THREE.Mesh(geometry, material);
//     this.logo.castShadow = true;
//     this.logo.receiveShadow = true;
//     this.scene.add(this.logo);

//     // Add gold accent
//     const accentGeometry = new THREE.BoxGeometry(0.6, 1.2, 0.35);
//     const accentMaterial = new THREE.MeshStandardMaterial({
//       color: 0xe8a020,
//       metalness: 0.5,
//       roughness: 0.3,
//     });
//     const accent = new THREE.Mesh(accentGeometry, accentMaterial);
//     accent.position.set(0.4, -0.2, 0.02);
//     accent.castShadow = true;
//     this.logo.add(accent);

//     this.logo.animation = { scale: 0 };
//   }

//   createCards() {
//     this.cards = [];
//     const cardData = [
//       { label: "Clean Code", position: [3.5, 2.5, 0], color: 0x1a3050 },
//       { label: "Design", position: [3.5, -2.5, 0], color: 0x1a3050 },
//       { label: "System Scaling", position: [-3.5, 2.5, 0], color: 0x1a3050 },
//       { label: "Security", position: [-3.5, -2.5, 0], color: 0x1a3050 },
//     ];

//     cardData.forEach((data, idx) => {
//       const geometry = new THREE.BoxGeometry(1.2, 0.8, 0.15);
//       const material = new THREE.MeshStandardMaterial({
//         color: data.color,
//         metalness: 0.2,
//         roughness: 0.5,
//       });

//       const card = new THREE.Mesh(geometry, material);
//       card.position.set(...data.position);
//       card.castShadow = true;
//       card.receiveShadow = true;
//       card.label = data.label;
//       card.animation = { scale: 0, delay: idx * 0.1 };
//       card.defaultColor = new THREE.Color(data.color);

//       this.scene.add(card);
//       this.cards.push(card);
//     });
//   }

//   createConnections() {
//     this.connections = [];

//     this.cards.forEach((card) => {
//       const startPoint = this.logo.position
//         .clone()
//         .add(new THREE.Vector3(0, 0, 0.5));
//       const endPoint = card.position.clone();

//       // Create control points for smooth curve
//       const control1 = new THREE.Vector3(
//         (startPoint.x + endPoint.x) * 0.5 + (Math.random() - 0.5) * 2,
//         startPoint.y + (endPoint.y - startPoint.y) * 0.3,
//         startPoint.z,
//       );

//       const curve = new THREE.CatmullRomCurve3([
//         startPoint,
//         control1,
//         endPoint,
//       ]);

//       const points = curve.getPoints(50);
//       const geometry = new THREE.BufferGeometry().setFromPoints(points);
//       const material = new THREE.LineBasicMaterial({
//         color: 0xe8a020,
//         linewidth: 2,
//         opacity: 0.3,
//       });

//       const line = new THREE.Line(geometry, material);
//       line.card = card;
//       line.animation = { offset: 0 };
//       this.scene.add(line);
//       this.connections.push(line);
//     });
//   }

//   createLabels() {
//     const container = document.getElementById("hero3dLabels");
//     container.innerHTML = "";

//     this.labels = [];
//     this.cards.forEach((card) => {
//       const label = document.createElement("div");
//       label.className = "hero-3d-label";
//       label.textContent = card.label;
//       label.card = card;
//       container.appendChild(label);
//       this.labels.push(label);
//     });
//   }

//   onMouseMove(event) {
//     const rect = this.canvas.getBoundingClientRect();
//     this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//     this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

//     this.raycaster.setFromCamera(this.mouse, this.camera);
//     const intersects = this.raycaster.intersectObjects(this.cards);

//     // Reset all cards
//     this.cards.forEach((card) => {
//       card.targetScale = 1;
//       card.material.color.copy(card.defaultColor);
//     });

//     // Highlight hovered card
//     if (intersects.length > 0) {
//       const card = intersects[0].object;
//       card.targetScale = 1.15;
//       card.material.color.set(0xd4a574); // Lighter gold
//       this.hoveredCard = card;

//       // Highlight connection
//       const connection = this.connections.find((c) => c.card === card);
//       if (connection) {
//         connection.material.opacity = 0.7;
//         connection.material.color.set(0xe8a020);
//       }
//     } else {
//       this.hoveredCard = null;
//     }

//     // Reset connections
//     this.connections.forEach((conn) => {
//       if (conn.card !== this.hoveredCard) {
//         conn.material.opacity = 0.3;
//       }
//     });
//   }

//   updateLabels() {
//     this.labels.forEach((label) => {
//       const card = label.card;
//       const vector = card.position.clone();
//       vector.project(this.camera);

//       const x = (vector.x * 0.5 + 0.5) * this.canvas.clientWidth;
//       const y = -(vector.y * 0.5 - 0.5) * this.canvas.clientHeight;

//       label.style.left = x + "px";
//       label.style.top = y + "px";

//       // Show label if card is visible
//       if (vector.z < 1) {
//         label.classList.add("visible");
//       } else {
//         label.classList.remove("visible");
//       }
//     });
//   }

//   animate() {
//     requestAnimationFrame(() => this.animate());
//     this.time += 0.016; // ~60fps

//     // Animate logo entrance
//     if (this.logo.animation.scale < 1) {
//       this.logo.animation.scale += 0.02;
//       this.logo.scale.set(
//         this.logo.animation.scale,
//         this.logo.animation.scale,
//         this.logo.animation.scale,
//       );
//     }

//     // Subtle floating motion on logo
//     this.logo.position.y = Math.sin(this.time * 0.5) * 0.15;
//     this.logo.rotation.y += 0.003;

//     // Animate cards
//     this.cards.forEach((card) => {
//       if (card.animation.scale < 1) {
//         card.animation.scale += 0.015;
//         card.scale.set(
//           card.animation.scale,
//           card.animation.scale,
//           card.animation.scale,
//         );
//       }

//       // Smooth scale transition on hover
//       if (card.targetScale !== undefined) {
//         card.scale.lerp(
//           new THREE.Vector3(
//             card.targetScale,
//             card.targetScale,
//             card.targetScale,
//           ),
//           0.1,
//         );
//       }

//       // Subtle idle rotation
//       card.rotation.z += 0.001;
//       card.position.y += Math.sin(this.time * 0.8 + card.position.x) * 0.0005;
//     });

//     // Animate connection lines with flowing effect
//     this.connections.forEach((connection, idx) => {
//       const positions = connection.geometry.attributes.position.array;
//       const length = positions.length / 3;

//       for (let i = 0; i < length; i++) {
//         const progress = (i / length + this.time * 0.3) % 1;
//         const glow = Math.sin(progress * Math.PI) * 0.4 + 0.3;
//         // Opacity variation along line for flowing effect
//       }
//     });

//     // Update label positions in 2D space
//     this.updateLabels();

//     this.renderer.render(this.scene, this.camera);
//   }

//   onWindowResize() {
//     const width = this.canvas.clientWidth;
//     const height = this.canvas.clientHeight;

//     this.camera.aspect = width / height;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(width, height);
//   }
// }

// // Initialize on DOM ready
// document.addEventListener("DOMContentLoaded", () => {
//   new Hero3DScene();
// });
// ============================================================
// Kiru Tech — Hero 3D Scene (Three.js r128)
// Central "K" logo node + glassmorphic cards + gold flow lines
// Matches reference image: light scene, isometric platform
// ============================================================

// class Hero3DScene {
//   constructor() {
//     this.canvas = document.getElementById("heroCanvas");
//     if (!this.canvas) return;

//     this.scene = new THREE.Scene();
//     this.scene.background = new THREE.Color(0xf2f5fb);
//     this.scene.fog = new THREE.FogExp2(0xf2f5fb, 0.04);

//     const w = this.canvas.clientWidth;
//     const h = this.canvas.clientHeight;
//     this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 200);
//     this.camera.position.set(0, 1.0, 11.5);
//     this.camera.lookAt(0, 0, 0);

//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.canvas,
//       antialias: true,
//       alpha: true,
//     });
//     this.renderer.setSize(w, h);
//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     this.renderer.shadowMap.enabled = true;
//     this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//     // State
//     this.time = 0;
//     this.entranceT = 0;
//     this.hoveredCard = null;
//     this.raycaster = new THREE.Raycaster();
//     this.mouse = new THREE.Vector2(-9999, -9999);
//     this.cards = [];
//     this.cardBodies = [];
//     this.connections = [];
//     this.labels = [];

//     this.setupLighting();
//     this.createPlatform();
//     this.createParticles();
//     this.createLogo();
//     this.createCards();
//     this.createConnections();
//     this.createLabels();

//     window.addEventListener("resize", () => this.onResize());
//     this.canvas.addEventListener("mousemove", (e) => this.onMouseMove(e));
//     this.canvas.addEventListener("mouseleave", () => {
//       this.mouse.set(-9999, -9999);
//     });

//     this.animate();
//   }

//   setupLighting() {
//     this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));

//     const key = new THREE.DirectionalLight(0xfff8ee, 1.05);
//     key.position.set(-5, 9, 8);
//     key.castShadow = true;
//     key.shadow.mapSize.set(1024, 1024);
//     key.shadow.camera.left = key.shadow.camera.bottom = -9;
//     key.shadow.camera.right = key.shadow.camera.top = 9;
//     key.shadow.bias = -0.001;
//     this.scene.add(key);

//     const fill = new THREE.DirectionalLight(0xddeeff, 0.4);
//     fill.position.set(7, 2, 5);
//     this.scene.add(fill);

//     this.goldPt = new THREE.PointLight(0xffbb33, 1.3, 14);
//     this.goldPt.position.set(0, 0.2, 2.5);
//     this.scene.add(this.goldPt);

//     const rim = new THREE.PointLight(0x4455ff, 0.2, 20);
//     rim.position.set(-6, 4, 3);
//     this.scene.add(rim);

//     const bounce = new THREE.PointLight(0xffffff, 0.25, 15);
//     bounce.position.set(0, -5, 5);
//     this.scene.add(bounce);
//   }

//   createPlatform() {
//     // Two-tier cylinder platform (matches reference image)
//     const tiers = [
//       { r: 2.6, h: 0.13, y: -2.08, color: 0xe4e9f4 },
//       { r: 3.5, h: 0.09, y: -2.24, color: 0xd8dff0 },
//       { r: 4.4, h: 0.06, y: -2.36, color: 0xcdd5ec },
//     ];
//     tiers.forEach(({ r, h, y, color }) => {
//       const mesh = new THREE.Mesh(
//         new THREE.CylinderGeometry(r, r, h, 72),
//         new THREE.MeshStandardMaterial({
//           color,
//           metalness: 0.03,
//           roughness: 0.65,
//         }),
//       );
//       mesh.position.y = y;
//       mesh.receiveShadow = true;
//       this.scene.add(mesh);
//     });

//     // Dot-grid on platform surface
//     const dotGeo = new THREE.CircleGeometry(0.022, 8);
//     const dotMat = new THREE.MeshBasicMaterial({
//       color: 0xb0bed8,
//       transparent: true,
//       opacity: 0.5,
//     });
//     for (let x = -4; x <= 4; x += 0.55) {
//       for (let z = -4; z <= 4; z += 0.55) {
//         if (Math.sqrt(x * x + z * z) > 4.2) continue;
//         const d = new THREE.Mesh(dotGeo, dotMat);
//         d.rotation.x = -Math.PI / 2;
//         d.position.set(x, -2.02, z);
//         this.scene.add(d);
//       }
//     }
//   }

//   createParticles() {
//     const N = 90;
//     const pos = [],
//       col = [];
//     const gold = new THREE.Color(0xe8a020);
//     const navy = new THREE.Color(0x1a3050);
//     const light = new THREE.Color(0xc0cee6);
//     for (let i = 0; i < N; i++) {
//       pos.push(
//         (Math.random() - 0.5) * 22,
//         (Math.random() - 0.5) * 14,
//         (Math.random() - 0.5) * 9 - 2,
//       );
//       const r = Math.random();
//       const c = r < 0.18 ? gold : r < 0.42 ? navy : light;
//       col.push(c.r, c.g, c.b);
//     }
//     const geo = new THREE.BufferGeometry();
//     geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
//     geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
//     this.ptSys = new THREE.Points(
//       geo,
//       new THREE.PointsMaterial({
//         size: 0.038,
//         vertexColors: true,
//         transparent: true,
//         opacity: 0.55,
//         sizeAttenuation: true,
//       }),
//     );
//     this.ptData = Array.from({ length: N }, () => ({
//       sp: Math.random() * 0.0035 + 0.001,
//       off: Math.random() * 6.28,
//     }));
//     this.scene.add(this.ptSys);
//   }

//   createLogo() {
//     this.logoGroup = new THREE.Group();

//     const navyMat = () =>
//       new THREE.MeshStandardMaterial({
//         color: 0x0d1b2a,
//         metalness: 0.5,
//         roughness: 0.28,
//       });
//     const goldMat = () =>
//       new THREE.MeshStandardMaterial({
//         color: 0xe8a020,
//         metalness: 0.6,
//         roughness: 0.18,
//       });

//     // Vertical bar
//     const vBar = new THREE.Mesh(
//       new THREE.BoxGeometry(0.44, 2.2, 0.36),
//       navyMat(),
//     );
//     vBar.position.x = -0.3;
//     vBar.castShadow = true;
//     this.logoGroup.add(vBar);

//     // Upper arm (navy)
//     const uArm = new THREE.Mesh(
//       new THREE.BoxGeometry(1.0, 0.4, 0.34),
//       navyMat(),
//     );
//     uArm.rotation.z = -0.85;
//     uArm.position.set(0.34, 0.65, 0);
//     uArm.castShadow = true;
//     this.logoGroup.add(uArm);

//     // Lower arm (gold) — the chevron highlight from reference image
//     const lArm = new THREE.Mesh(
//       new THREE.BoxGeometry(1.0, 0.4, 0.36),
//       goldMat(),
//     );
//     lArm.rotation.z = 0.85;
//     lArm.position.set(0.34, -0.62, 0.01);
//     lArm.castShadow = true;
//     this.logoGroup.add(lArm);

//     // Back-glow plane
//     const glowGeo = new THREE.PlaneGeometry(3.5, 3.5);
//     this.glowMat = new THREE.MeshBasicMaterial({
//       color: 0xe8a020,
//       transparent: true,
//       opacity: 0.022,
//       side: THREE.FrontSide,
//     });
//     const glowPlane = new THREE.Mesh(glowGeo, this.glowMat);
//     glowPlane.position.z = -0.3;
//     this.logoGroup.add(glowPlane);

//     // Start scaled to 0
//     this.logoGroup.scale.setScalar(0);
//     this.logoGroup.position.set(0, -1.9, 0);
//     this.scene.add(this.logoGroup);
//   }

//   createCards() {
//     const defs = [
//       {
//         label: "Clean Code",
//         sub: "Typed · Tested · Documented",
//         pos: [3.45, 1.85, 0.35],
//         rot: [-0.07, -0.2, 0.05],
//         delay: 0.0,
//         accent: 0x3a6bcc,
//         icon: "</>",
//       },
//       {
//         label: "Design",
//         sub: "Pixel-perfect interfaces",
//         pos: [3.35, -1.5, 0.5],
//         rot: [0.09, -0.18, -0.04],
//         delay: 0.14,
//         accent: 0xe8a020,
//         icon: "✦",
//       },
//       {
//         label: "System Scaling",
//         sub: "Microservices · Cloud ready",
//         pos: [-3.45, 1.6, 0.4],
//         rot: [-0.05, 0.2, 0.04],
//         delay: 0.07,
//         accent: 0x2eb872,
//         icon: "⬡",
//       },
//       {
//         label: "Security",
//         sub: "Zero-trust · OWASP compliant",
//         pos: [-3.3, -1.65, 0.3],
//         rot: [0.07, 0.17, -0.05],
//         delay: 0.21,
//         accent: 0xb054c8,
//         icon: "🔐",
//       },
//     ];

//     defs.forEach((def, idx) => {
//       const g = new THREE.Group();
//       const W = 1.6,
//         H = 1.0,
//         D = 0.09;

//       // Body
//       const bodyMat = new THREE.MeshStandardMaterial({
//         color: 0xfcfdff,
//         metalness: 0.0,
//         roughness: 0.12,
//         transparent: true,
//         opacity: 0.93,
//       });
//       const body = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), bodyMat);
//       body.castShadow = true;
//       body.receiveShadow = true;
//       g.add(body);

//       // Top colour stripe
//       const stripeMat = new THREE.MeshStandardMaterial({
//         color: def.accent,
//         metalness: 0.2,
//         roughness: 0.3,
//         transparent: true,
//         opacity: 0.88,
//       });
//       const stripe = new THREE.Mesh(
//         new THREE.BoxGeometry(W, 0.062, D + 0.003),
//         stripeMat,
//       );
//       stripe.position.y = H / 2 - 0.031;
//       g.add(stripe);

//       // Border
//       const borderMat = new THREE.MeshBasicMaterial({
//         color: 0xc8d4e8,
//         transparent: true,
//         opacity: 0.55,
//       });
//       [
//         [W, 0.009, D + 0.002, 0, H / 2, 0],
//         [W, 0.009, D + 0.002, 0, -H / 2, 0],
//         [0.009, H, D + 0.002, -W / 2, 0, 0],
//         [0.009, H, D + 0.002, W / 2, 0, 0],
//       ].forEach(([bw, bh, bd, bx, by, bz]) => {
//         const bm = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), borderMat);
//         bm.position.set(bx, by, bz);
//         g.add(bm);
//       });

//       // Icon circle
//       const icGeo = new THREE.CircleGeometry(0.115, 32);
//       const icMat = new THREE.MeshBasicMaterial({
//         color: def.accent,
//         transparent: true,
//         opacity: 0.15,
//       });
//       const icMesh = new THREE.Mesh(icGeo, icMat);
//       icMesh.position.set(-0.52, 0.17, D / 2 + 0.001);
//       g.add(icMesh);

//       // Mini bar chart (3 bars representing data)
//       [0.07, 0.14, 0.1].forEach((bh, bi) => {
//         const bMat = new THREE.MeshStandardMaterial({
//           color: bi === 1 ? def.accent : 0xb8cae0,
//           transparent: true,
//           opacity: 0.85,
//         });
//         const bMesh = new THREE.Mesh(
//           new THREE.BoxGeometry(0.055, bh, 0.01),
//           bMat,
//         );
//         bMesh.position.set(0.16 + bi * 0.1, -0.24 + bh / 2, D / 2 + 0.001);
//         g.add(bMesh);
//       });

//       // Text placeholder lines
//       [
//         [0.58, 0.09, 0.04],
//         [0.35, 0.065, -0.04],
//       ].forEach(([lw, ly, lx]) => {
//         const lm = new THREE.MeshBasicMaterial({
//           color: 0xaabbd0,
//           transparent: true,
//           opacity: 0.65,
//         });
//         const lMesh = new THREE.Mesh(
//           new THREE.BoxGeometry(lw, 0.02, 0.007),
//           lm,
//         );
//         lMesh.position.set(lx + 0.05, ly, D / 2 + 0.001);
//         g.add(lMesh);
//       });

//       // Small checkbox/button element
//       const btnGeo = new THREE.BoxGeometry(0.28, 0.075, 0.012);
//       const btnMat = new THREE.MeshStandardMaterial({
//         color: def.accent,
//         metalness: 0.1,
//         roughness: 0.4,
//         transparent: true,
//         opacity: 0.65,
//       });
//       const btn = new THREE.Mesh(btnGeo, btnMat);
//       btn.position.set(0.36, -0.26, D / 2 + 0.001);
//       g.add(btn);

//       g.position.set(...def.pos);
//       g.rotation.set(...def.rot);
//       g.scale.setScalar(0);

//       g.userData = {
//         label: def.label,
//         sub: def.sub,
//         delay: def.delay,
//         idx,
//         targetPos: new THREE.Vector3(...def.pos),
//         defaultRot: new THREE.Euler(...def.rot),
//         accent: def.accent,
//         icon: def.icon,
//         entranceT: 0,
//         isHovered: false,
//         bodyMat,
//         stripeMat,
//       };

//       this.scene.add(g);
//       this.cards.push(g);
//       body.userData.cardGroup = g;
//       this.cardBodies.push(body);
//     });
//   }

//   createConnections() {
//     this.cards.forEach((card, idx) => {
//       const start = new THREE.Vector3(0, 0, 0.25);
//       const end = card.userData.targetPos
//         .clone()
//         .setZ(card.userData.targetPos.z - 0.4);

//       // Control point bulges outward in Z
//       const mid = start.clone().lerp(end, 0.5);
//       mid.z += 0.7 + idx * 0.1;
//       mid.x += end.x > 0 ? 0.4 : -0.4;

//       const curve = new THREE.CatmullRomCurve3(
//         [start, mid, end],
//         false,
//         "catmullrom",
//         0.5,
//       );

//       // Base line
//       const pts = curve.getPoints(80);
//       const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
//       const lineMat = new THREE.LineBasicMaterial({
//         color: 0xe8a020,
//         transparent: true,
//         opacity: 0.18,
//       });
//       const line = new THREE.Line(lineGeo, lineMat);
//       this.scene.add(line);

//       // Flow bead
//       const dotMat = new THREE.MeshStandardMaterial({
//         color: 0xffcc44,
//         emissive: 0xffcc44,
//         emissiveIntensity: 1.5,
//         transparent: true,
//         opacity: 0.92,
//         roughness: 0.05,
//       });
//       const dot = new THREE.Mesh(
//         new THREE.SphereGeometry(0.048, 14, 14),
//         dotMat,
//       );
//       dot.visible = false;
//       this.scene.add(dot);

//       // Tail beads
//       const tails = [3, 2, 1].map((n) => {
//         const tm = new THREE.MeshStandardMaterial({
//           color: 0xffcc44,
//           emissive: 0xffcc44,
//           emissiveIntensity: 0.8 - n * 0.2,
//           transparent: true,
//           opacity: 0.6 - n * 0.15,
//           roughness: 0.1,
//         });
//         const t = new THREE.Mesh(
//           new THREE.SphereGeometry(0.028 - n * 0.005, 8, 8),
//           tm,
//         );
//         t.visible = false;
//         this.scene.add(t);
//         return t;
//       });

//       this.connections.push({
//         curve,
//         line,
//         lineMat,
//         dot,
//         dotMat,
//         tails,
//         card,
//         offset: idx * 0.25,
//         speed: 0.26 + Math.random() * 0.06,
//       });
//     });
//   }

//   createLabels() {
//     const container = document.getElementById("hero3dLabels");
//     if (!container) return;
//     container.innerHTML = "";

//     this.cards.forEach((card) => {
//       const accentHex =
//         "#" + card.userData.accent.toString(16).padStart(6, "0");

//       const el = document.createElement("div");
//       el.className = "hero-3d-label";
//       el.style.cssText = `
//         display:flex; flex-direction:column; gap:2px;
//         background:rgba(255,255,255,0.93);
//         border:1px solid rgba(13,27,42,0.10);
//         border-top:2.5px solid ${accentHex};
//         color:#0d1b2a;
//         padding:6px 13px 8px;
//         border-radius:8px;
//         box-shadow:0 4px 20px rgba(13,27,42,0.09),0 1px 4px rgba(13,27,42,0.06);
//         backdrop-filter:blur(8px);
//         font-family:'DM Sans',sans-serif;
//         pointer-events:all; cursor:pointer;
//         transition:transform .22s ease,box-shadow .22s ease,opacity .35s ease;
//         white-space:nowrap;
//       `;

//       const titleEl = document.createElement("span");
//       titleEl.textContent = card.userData.label;
//       titleEl.style.cssText =
//         "font-size:.68rem;font-weight:700;letter-spacing:.04em;color:#0d1b2a;";

//       const subEl = document.createElement("span");
//       subEl.textContent = card.userData.sub;
//       subEl.style.cssText = "font-size:.56rem;color:#7890b0;font-weight:400;";

//       el.appendChild(titleEl);
//       el.appendChild(subEl);
//       container.appendChild(el);

//       el.addEventListener("mouseenter", () => {
//         card.userData.isHovered = true;
//         this.hoveredCard = card;
//       });
//       el.addEventListener("mouseleave", () => {
//         card.userData.isHovered = false;
//         if (this.hoveredCard === card) this.hoveredCard = null;
//       });

//       this.labels.push({ el, card });
//     });
//   }

//   onMouseMove(e) {
//     const r = this.canvas.getBoundingClientRect();
//     this.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
//     this.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
//   }

//   updateHover() {
//     this.raycaster.setFromCamera(this.mouse, this.camera);
//     const hits = this.raycaster.intersectObjects(this.cardBodies);
//     const hovered = hits.length ? hits[0].object.userData.cardGroup : null;
//     this.cards.forEach((c) => {
//       c.userData.isHovered = c === hovered;
//     });
//     this.hoveredCard = hovered;
//   }

//   updateLabels() {
//     const W = this.canvas.clientWidth,
//       H = this.canvas.clientHeight;
//     this.labels.forEach(({ el, card }) => {
//       const p = card.position.clone().project(this.camera);
//       el.style.left = (p.x * 0.5 + 0.5) * W + "px";
//       el.style.top = -(p.y * 0.5 - 0.5) * H - 46 + "px";
//       const vis = p.z < 1 && card.scale.x > 0.05;
//       el.style.opacity = vis ? "1" : "0";
//       const accentHex =
//         "#" + card.userData.accent.toString(16).padStart(6, "0");
//       if (card.userData.isHovered) {
//         el.style.transform = "translate(-50%,-50%) scale(1.08)";
//         el.style.boxShadow = `0 6px 26px rgba(13,27,42,0.14),0 0 0 2px ${accentHex}55`;
//       } else {
//         el.style.transform = "translate(-50%,-50%) scale(1)";
//         el.style.boxShadow =
//           "0 4px 20px rgba(13,27,42,0.09),0 1px 4px rgba(13,27,42,0.06)";
//       }
//     });
//   }

//   easeOutBack(t) {
//     const c1 = 1.70158,
//       c3 = c1 + 1;
//     return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
//   }

//   lerpV(a, b, t) {
//     return a + (b - a) * t;
//   }

//   animate() {
//     requestAnimationFrame(() => this.animate());
//     this.time += 0.016;
//     this.entranceT = Math.min(1, this.entranceT + 0.011);

//     this.updateHover();

//     // ── Logo ──────────────────────────────────────────────
//     const logoS = this.easeOutBack(Math.min(1, this.entranceT * 1.6));
//     this.logoGroup.scale.setScalar(Math.max(0, logoS));
//     this.logoGroup.position.y = -1.9 + Math.sin(this.time * 0.55) * 0.09;
//     this.logoGroup.rotation.y = Math.sin(this.time * 0.32) * 0.075;
//     this.goldPt.intensity = 1.2 + Math.sin(this.time * 1.5) * 0.22;
//     this.glowMat.opacity = 0.018 + Math.sin(this.time * 1.2) * 0.006;

//     // ── Cards ─────────────────────────────────────────────
//     this.cards.forEach((card, idx) => {
//       const raw = Math.max(0, this.entranceT - 0.28 - card.userData.delay);
//       const t = this.easeOutBack(Math.min(1, raw * 2.4));
//       card.userData.entranceT = t;

//       const isH = card.userData.isHovered;
//       const targetS = isH ? t * 1.06 : t;
//       card.scale.setScalar(this.lerpV(card.scale.x, targetS, 0.1));

//       // Float
//       card.position.y =
//         card.userData.targetPos.y +
//         Math.sin(this.time * 0.58 + idx * 1.5) * 0.06;
//       card.position.x =
//         card.userData.targetPos.x + Math.sin(this.time * 0.38 + idx) * 0.012;

//       // Rotation on hover
//       const dr = card.userData.defaultRot;
//       card.rotation.x = this.lerpV(
//         card.rotation.x,
//         dr.x * (isH ? 0.5 : 1),
//         0.07,
//       );
//       card.rotation.y = this.lerpV(
//         card.rotation.y,
//         dr.y * (isH ? 0.35 : 1),
//         0.07,
//       );
//       card.rotation.z = this.lerpV(card.rotation.z, dr.z, 0.07);

//       // Body tint on hover
//       if (isH) {
//         card.userData.bodyMat.emissive = new THREE.Color(0x0010ff);
//         card.userData.bodyMat.emissiveIntensity = this.lerpV(
//           card.userData.bodyMat.emissiveIntensity || 0,
//           0.025,
//           0.1,
//         );
//       } else {
//         card.userData.bodyMat.emissiveIntensity = this.lerpV(
//           card.userData.bodyMat.emissiveIntensity || 0,
//           0,
//           0.1,
//         );
//       }
//     });

//     // ── Connections ───────────────────────────────────────
//     this.connections.forEach((conn) => {
//       const { curve, lineMat, dot, dotMat, tails, card } = conn;
//       const isH = card.userData.isHovered;
//       const ready = card.userData.entranceT > 0.65;

//       lineMat.opacity = this.lerpV(
//         lineMat.opacity,
//         ready ? (isH ? 0.6 : 0.22) : 0,
//         0.05,
//       );

//       const spd = conn.speed * (isH ? 1.6 : 1.0);
//       const t = (((this.time * spd * 0.1 + conn.offset) % 1) + 1) % 1;

//       dot.position.copy(curve.getPoint(t));
//       dot.visible = ready;
//       dotMat.emissiveIntensity = isH ? 2.8 : 1.4;
//       dotMat.opacity = isH ? 1.0 : 0.78;

//       tails.forEach((tail, ti) => {
//         const to = (((t - (ti + 1) * 0.02 + 1) % 1) + 1) % 1;
//         tail.position.copy(curve.getPoint(to));
//         tail.visible = ready;
//       });
//     });

//     // ── Particles ─────────────────────────────────────────
//     if (this.ptSys) {
//       const pos = this.ptSys.geometry.attributes.position;
//       for (let i = 0; i < pos.count; i++) {
//         pos.setY(i, pos.getY(i) + this.ptData[i].sp);
//         if (pos.getY(i) > 7) pos.setY(i, -7);
//       }
//       pos.needsUpdate = true;
//       this.ptSys.rotation.y += 0.0002;
//     }

//     this.updateLabels();
//     this.renderer.render(this.scene, this.camera);
//   }

//   onResize() {
//     const w = this.canvas.clientWidth,
//       h = this.canvas.clientHeight;
//     this.camera.aspect = w / h;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(w, h);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   new Hero3DScene();
// });

// ============================================================
// Kiru Tech — Hero 3D Scene v3  (Three.js r128)
// Target: matches reference image ~95%
// ============================================================

// class Hero3DScene {
//   constructor() {
//     this.canvas = document.getElementById("heroCanvas");
//     if (!this.canvas) return;

//     /* ── Scene ── */
//     this.scene = new THREE.Scene();
//     this.scene.background = new THREE.Color(0xf8f9fc);

//     /* ── Camera — slight top-down isometric feel ── */
//     const W = this.canvas.clientWidth || 600;
//     const H = this.canvas.clientHeight || 600;
//     this.camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 300);
//     this.camera.position.set(0, 3.5, 13);
//     this.camera.lookAt(0, -0.5, 0);

//     /* ── Renderer ── */
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.canvas,
//       antialias: true,
//       alpha: false,
//     });
//     this.renderer.setSize(W, H);
//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     this.renderer.shadowMap.enabled = true;
//     this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     this.renderer.physicallyCorrectLights = true;

//     /* ── State ── */
//     this.time = 0;
//     this.entrance = 0; // 0→1 over ~3 s
//     this.raycaster = new THREE.Raycaster();
//     this.mouse = new THREE.Vector2(-9, -9);
//     this.cards = [];
//     this.hitMeshes = [];
//     this.connLines = [];
//     this.flowBeads = [];
//     this.labels = [];

//     /* ── Build ── */
//     this.buildLights();
//     this.buildPlatform();
//     this.buildLogoK();
//     this.buildCards();
//     this.buildConnections();
//     this.buildLabels();
//     this.buildParticles();

//     /* ── Events ── */
//     window.addEventListener("resize", () => this.onResize());
//     this.canvas.addEventListener("mousemove", (e) => this.onMouse(e));
//     this.canvas.addEventListener("mouseleave", () => {
//       this.mouse.set(-9, -9);
//     });

//     this.animate();
//   }

//   /* ════════════════════════════════════════════════════════
//      LIGHTS — warm studio: key from upper-left, gold fill
//   ════════════════════════════════════════════════════════ */
//   buildLights() {
//     // Bright ambient so white panels stay white
//     this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));

//     // Key — upper-left, warm
//     const key = new THREE.DirectionalLight(0xfffaf0, 1.2);
//     key.position.set(-4, 10, 8);
//     key.castShadow = true;
//     key.shadow.mapSize.set(2048, 2048);
//     key.shadow.camera.left = -9;
//     key.shadow.camera.right = 9;
//     key.shadow.camera.top = 9;
//     key.shadow.camera.bottom = -9;
//     key.shadow.bias = -0.001;
//     this.scene.add(key);

//     // Soft fill from right
//     const fill = new THREE.DirectionalLight(0xe8f0ff, 0.45);
//     fill.position.set(8, 4, 6);
//     this.scene.add(fill);

//     // Gold point — emanates from behind/below the K logo
//     this.goldPt = new THREE.PointLight(0xffcc55, 2.2, 16);
//     this.goldPt.position.set(0.5, -0.5, 3);
//     this.scene.add(this.goldPt);

//     // Subtle blue rim from below
//     const rim = new THREE.PointLight(0x8ab4f8, 0.35, 22);
//     rim.position.set(0, -6, 4);
//     this.scene.add(rim);
//   }

//   /* ════════════════════════════════════════════════════════
//      PLATFORM — two-tier white rounded rectangle (reference)
//   ════════════════════════════════════════════════════════ */
//   buildPlatform() {
//     // Helper: rounded-rect platform using CylinderGeometry as rounded pill
//     const makeTier = (rx, rz, ht, y, col) => {
//       // Use a lathe approach: just box + sphere edges approximation via cylinder
//       // Actually: for a rounded rectangle we tile a box with sphere corners
//       const g = new THREE.BoxGeometry(rx * 2, ht, rz * 2, 1, 1, 1);
//       const m = new THREE.MeshStandardMaterial({
//         color: col,
//         metalness: 0.02,
//         roughness: 0.55,
//       });
//       const mesh = new THREE.Mesh(g, m);
//       mesh.position.y = y;
//       mesh.receiveShadow = true;
//       mesh.castShadow = false;
//       this.scene.add(mesh);

//       // round the corners with 4 cylinders + spheres
//       const cR = Math.min(rx, rz) * 0.18;
//       const cylG = new THREE.CylinderGeometry(cR, cR, ht, 20);
//       const sphG = new THREE.SphereGeometry(cR, 16, 8);
//       const cornerMat = new THREE.MeshStandardMaterial({
//         color: col,
//         metalness: 0.02,
//         roughness: 0.55,
//       });
//       [
//         [-1, -1],
//         [1, -1],
//         [1, 1],
//         [-1, 1],
//       ].forEach(([sx, sz]) => {
//         const cx = sx * (rx - cR),
//           cz = sz * (rz - cR);
//         const c = new THREE.Mesh(cylG, cornerMat);
//         c.position.set(cx, y, cz);
//         this.scene.add(c);
//       });
//     };

//     makeTier(3.2, 2.6, 0.28, -2.55, 0xf0f2f8); // upper tier — white-blue
//     makeTier(4.0, 3.3, 0.22, -2.86, 0xe6e9f4); // lower tier — slightly darker
//   }

//   /* ════════════════════════════════════════════════════════
//      LOGO "K" — tall, navy, with gold lower arm
//      Matches: thick vertical slab, two diagonal arms,
//      lower arm gold, sitting on platform
//   ════════════════════════════════════════════════════════ */
//   buildLogoK() {
//     this.logoGroup = new THREE.Group();

//     const navy = new THREE.MeshStandardMaterial({
//       color: 0x0d1b2a,
//       metalness: 0.55,
//       roughness: 0.22,
//     });
//     const gold = new THREE.MeshStandardMaterial({
//       color: 0xd4911a,
//       metalness: 0.65,
//       roughness: 0.18,
//     });

//     // ── Vertical bar — tall thick slab ──
//     // Reference: the vertical part is ~2× taller than wide, substantial depth
//     const vH = 2.9,
//       vW = 0.52,
//       vD = 0.52;
//     const vBar = new THREE.Mesh(new THREE.BoxGeometry(vW, vH, vD), navy);
//     vBar.position.set(-0.22, 0.1, 0);
//     vBar.castShadow = true;
//     this.logoGroup.add(vBar);

//     // Round the top & bottom of vertical bar with half-cylinders
//     const capR = new THREE.CylinderGeometry(vW / 2, vW / 2, vD, 20);
//     const topCap = new THREE.Mesh(capR, navy);
//     topCap.position.set(-0.22, 0.1 + vH / 2, 0);
//     topCap.rotation.x = Math.PI / 2;
//     this.logoGroup.add(topCap);
//     const botCap = new THREE.Mesh(capR, navy);
//     botCap.position.set(-0.22, 0.1 - vH / 2, 0);
//     botCap.rotation.x = Math.PI / 2;
//     this.logoGroup.add(botCap);

//     // ── Upper arm — navy diagonal going upper-right ──
//     // In reference: fairly thick slab, angled ~40° from horizontal
//     const uArmLen = 1.55,
//       uArmW = 0.42,
//       uArmD = 0.46;
//     const uArm = new THREE.Mesh(
//       new THREE.BoxGeometry(uArmLen, uArmW, uArmD),
//       navy,
//     );
//     uArm.rotation.z = -0.72; // ~41°
//     // Position tip near vertical bar top, arm extends upper-right
//     uArm.position.set(0.55, 0.98, 0);
//     uArm.castShadow = true;
//     this.logoGroup.add(uArm);

//     // ── Lower arm — GOLD diagonal going lower-right ──
//     // In reference: same thickness as upper, chevron-like, gold/bronze
//     const lArmLen = 1.45,
//       lArmW = 0.42,
//       lArmD = 0.46;
//     const lArm = new THREE.Mesh(
//       new THREE.BoxGeometry(lArmLen, lArmW, lArmD),
//       gold,
//     );
//     lArm.rotation.z = 0.72;
//     lArm.position.set(0.55, -0.82, 0.02);
//     lArm.castShadow = true;
//     this.logoGroup.add(lArm);

//     // ── Subtle specular highlight plane (the white glint on reference) ──
//     const glintG = new THREE.PlaneGeometry(0.18, 0.9);
//     const glintM = new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//       opacity: 0.12,
//     });
//     const glint = new THREE.Mesh(glintG, glintM);
//     glint.position.set(-0.32, 0.5, vD / 2 + 0.01);
//     this.logoGroup.add(glint);

//     // ── Back glow plane — diffuse gold behind logo ──
//     this.glowM = new THREE.MeshBasicMaterial({
//       color: 0xffcc55,
//       transparent: true,
//       opacity: 0.0,
//       side: THREE.FrontSide,
//     });
//     const glowP = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), this.glowM);
//     glowP.position.z = -0.5;
//     this.logoGroup.add(glowP);

//     // Logo sits on top of the platform
//     this.logoGroup.position.set(0.08, -2.27, 0);
//     this.logoGroup.scale.setScalar(0); // entrance animates in
//     this.scene.add(this.logoGroup);
//   }

//   /* ════════════════════════════════════════════════════════
//      CARDS — 4 dark navy UI panels floating around K
//      Reference cards:
//        TL: Code editor (dark, coloured syntax lines)
//        BL: Analytics chart (white/light, bar chart)
//        TR: Code tag icon </>  (small dark square)
//        BR: Browser/form card (light, with navy button + gold strip)
//        Bottom-right corner: Package/box icon (dark navy square)
//   ════════════════════════════════════════════════════════ */
//   buildCards() {
//     // Card definitions matching reference positions & content type
//     const defs = [
//       {
//         id: "code",
//         pos: [-3.0, 1.8, 0.5],
//         rot: [0.05, 0.25, -0.03],
//         W: 2.0,
//         H: 1.5,
//         dark: true,
//         label: "Clean Code",
//         sub: "Maintainable · Typed",
//         delay: 0.05,
//         buildFn: "buildCodeCard",
//       },
//       {
//         id: "analytics",
//         pos: [-3.1, -0.8, 0.4],
//         rot: [-0.04, 0.22, 0.02],
//         W: 1.7,
//         H: 1.3,
//         dark: false,
//         label: "Design",
//         sub: "Pixel-perfect UI",
//         delay: 0.18,
//         buildFn: "buildAnalyticsCard",
//       },
//       {
//         id: "browser",
//         pos: [3.2, -0.6, 0.5],
//         rot: [-0.04, -0.22, 0.02],
//         W: 1.9,
//         H: 1.35,
//         dark: false,
//         label: "System Scaling",
//         sub: "Cloud · Microservices",
//         delay: 0.1,
//         buildFn: "buildBrowserCard",
//       },
//       {
//         id: "icon-code",
//         pos: [2.8, 2.0, 0.5],
//         rot: [0.06, -0.22, -0.04],
//         W: 0.85,
//         H: 0.85,
//         dark: true,
//         label: "Security",
//         sub: "Zero-trust · OWASP",
//         delay: 0.0,
//         buildFn: "buildIconCard",
//       },
//     ];

//     defs.forEach((def, idx) => {
//       const group = new THREE.Group();
//       const { W, H } = def;
//       const D = 0.1;

//       // ── Body ──
//       const bodyCol = def.dark ? 0x0e1c2e : 0xf5f7fc;
//       const bodyMat = new THREE.MeshStandardMaterial({
//         color: bodyCol,
//         metalness: 0.05,
//         roughness: def.dark ? 0.35 : 0.2,
//         transparent: true,
//         opacity: 0.96,
//       });
//       const body = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), bodyMat);
//       body.castShadow = true;
//       body.receiveShadow = true;
//       group.add(body);

//       // ── Thin border ──
//       const borderCol = def.dark ? 0x1e3050 : 0xd0d8ea;
//       const bMat = new THREE.LineBasicMaterial({
//         color: borderCol,
//         transparent: true,
//         opacity: 0.7,
//       });
//       const borderPts = [
//         new THREE.Vector3(-W / 2, -H / 2, D / 2 + 0.001),
//         new THREE.Vector3(W / 2, -H / 2, D / 2 + 0.001),
//         new THREE.Vector3(W / 2, H / 2, D / 2 + 0.001),
//         new THREE.Vector3(-W / 2, H / 2, D / 2 + 0.001),
//         new THREE.Vector3(-W / 2, -H / 2, D / 2 + 0.001),
//       ];
//       const bGeo = new THREE.BufferGeometry().setFromPoints(borderPts);
//       group.add(new THREE.Line(bGeo, bMat));

//       // ── Card-specific content ──
//       this[def.buildFn](group, W, H, D, def.dark);

//       // ── Subtle shadow beneath card ──
//       const shadowG = new THREE.PlaneGeometry(W * 1.1, H * 0.22);
//       const shadowM = new THREE.MeshBasicMaterial({
//         color: 0x0d1b2a,
//         transparent: true,
//         opacity: 0.07,
//       });
//       const shadow = new THREE.Mesh(shadowG, shadowM);
//       shadow.rotation.x = -Math.PI / 2;
//       shadow.position.set(0.06, -H / 2 - 0.05, -0.02);
//       group.add(shadow);

//       group.position.set(...def.pos);
//       group.rotation.set(...def.rot);
//       group.scale.setScalar(0);

//       group.userData = {
//         ...def,
//         targetPos: new THREE.Vector3(...def.pos),
//         defRot: new THREE.Euler(...def.rot),
//         entranceT: 0,
//         isHovered: false,
//         bodyMat,
//         idx,
//       };

//       this.scene.add(group);
//       this.cards.push(group);
//       body.userData.cardGroup = group;
//       this.hitMeshes.push(body);
//     });
//   }

//   /* ── Card content builders ── */

//   // Dark navy code editor card (top-left in reference)
//   buildCodeCard(g, W, H, D, dark) {
//     const fz = D / 2 + 0.002;

//     // Top bar with 3 dots
//     const barG = new THREE.BoxGeometry(W, 0.14, 0.01);
//     const barM = new THREE.MeshBasicMaterial({
//       color: 0x162540,
//       transparent: true,
//       opacity: 0.9,
//     });
//     const bar = new THREE.Mesh(barG, barM);
//     bar.position.set(0, H / 2 - 0.07, fz);
//     g.add(bar);
//     // 3 dots
//     [0xcc4444, 0xddaa22, 0x44aa44].forEach((col, i) => {
//       const dot = new THREE.Mesh(
//         new THREE.CircleGeometry(0.025, 12),
//         new THREE.MeshBasicMaterial({ color: col }),
//       );
//       dot.position.set(-W / 2 + 0.08 + i * 0.075, H / 2 - 0.07, fz + 0.001);
//       g.add(dot);
//     });

//     // Syntax-coloured lines
//     const lineData = [
//       { col: 0xffaa33, w: 0.55, x: -0.22 },
//       { col: 0x44ccff, w: 0.72, x: -0.12 },
//       { col: 0xffaa33, w: 0.38, x: -0.32 },
//       { col: 0xff7777, w: 0.5, x: -0.22 },
//       { col: 0x88ff88, w: 0.65, x: -0.16 },
//       { col: 0xaaaaff, w: 0.42, x: -0.28 },
//       { col: 0x44ccff, w: 0.58, x: -0.2 },
//     ];
//     lineData.forEach((l, i) => {
//       const lm = new THREE.MeshBasicMaterial({
//         color: l.col,
//         transparent: true,
//         opacity: 0.88,
//       });
//       const lMesh = new THREE.Mesh(
//         new THREE.BoxGeometry(l.w, 0.038, 0.008),
//         lm,
//       );
//       lMesh.position.set(
//         l.x + l.w / 2 - W / 2 + 0.18,
//         H / 2 - 0.28 - i * 0.12,
//         fz + 0.001,
//       );
//       g.add(lMesh);

//       // dim indent line
//       const dim = new THREE.Mesh(
//         new THREE.BoxGeometry(0.22, 0.028, 0.007),
//         new THREE.MeshBasicMaterial({
//           color: 0x334466,
//           transparent: true,
//           opacity: 0.7,
//         }),
//       );
//       dim.position.set(-W / 2 + 0.21, H / 2 - 0.28 - i * 0.12, fz + 0.001);
//       g.add(dim);
//     });
//   }

//   // Light analytics card with bar chart (bottom-left in reference)
//   buildAnalyticsCard(g, W, H, D, dark) {
//     const fz = D / 2 + 0.002;

//     // User/person icon placeholder (circle + rect)
//     const head = new THREE.Mesh(
//       new THREE.CircleGeometry(0.09, 16),
//       new THREE.MeshBasicMaterial({
//         color: 0x334d73,
//         transparent: true,
//         opacity: 0.5,
//       }),
//     );
//     head.position.set(-W / 2 + 0.22, H / 2 - 0.22, fz);
//     g.add(head);

//     // Small label line
//     const lbl = new THREE.Mesh(
//       new THREE.BoxGeometry(0.48, 0.032, 0.008),
//       new THREE.MeshBasicMaterial({
//         color: 0xaabbd0,
//         transparent: true,
//         opacity: 0.8,
//       }),
//     );
//     lbl.position.set(-W / 2 + 0.55, H / 2 - 0.22, fz);
//     g.add(lbl);

//     // Divider line
//     const div = new THREE.Mesh(
//       new THREE.BoxGeometry(W - 0.2, 0.012, 0.006),
//       new THREE.MeshBasicMaterial({
//         color: 0xd0d8e8,
//         transparent: true,
//         opacity: 0.7,
//       }),
//     );
//     div.position.set(0, H / 2 - 0.4, fz);
//     g.add(div);

//     // Bar chart — 3 bars in navy
//     const bars = [
//       { h: 0.22, col: 0x1a3560 },
//       { h: 0.38, col: 0x1a3560 },
//       { h: 0.28, col: 0x1a3560 },
//     ];
//     bars.forEach((b, i) => {
//       const bMesh = new THREE.Mesh(
//         new THREE.BoxGeometry(0.18, b.h, 0.01),
//         new THREE.MeshBasicMaterial({
//           color: b.col,
//           transparent: true,
//           opacity: 0.85,
//         }),
//       );
//       bMesh.position.set(
//         -W / 2 + 0.28 + i * 0.3,
//         -H / 2 + b.h / 2 + 0.18,
//         fz + 0.001,
//       );
//       g.add(bMesh);
//     });

//     // Small dot/stat lines on right
//     [0.08, 0.0, -0.08].forEach((dy, i) => {
//       const sm = new THREE.Mesh(
//         new THREE.BoxGeometry(0.35, 0.022, 0.007),
//         new THREE.MeshBasicMaterial({
//           color: i === 0 ? 0x334d73 : 0xc0cede,
//           transparent: true,
//           opacity: 0.8,
//         }),
//       );
//       sm.position.set(W / 2 - 0.28, 0.08 + dy, fz);
//       g.add(sm);
//     });
//   }

//   // Light browser/form card (right side in reference)
//   buildBrowserCard(g, W, H, D, dark) {
//     const fz = D / 2 + 0.002;

//     // Top browser bar
//     const barM = new THREE.MeshBasicMaterial({
//       color: 0xe8edf5,
//       transparent: true,
//       opacity: 0.9,
//     });
//     const topBar = new THREE.Mesh(new THREE.BoxGeometry(W, 0.13, 0.01), barM);
//     topBar.position.set(0, H / 2 - 0.065, fz);
//     g.add(topBar);
//     // URL pill
//     const urlPill = new THREE.Mesh(
//       new THREE.BoxGeometry(W * 0.55, 0.055, 0.008),
//       new THREE.MeshBasicMaterial({
//         color: 0xd0d8ea,
//         transparent: true,
//         opacity: 0.9,
//       }),
//     );
//     urlPill.position.set(0, H / 2 - 0.065, fz + 0.001);
//     g.add(urlPill);

//     // Main content area — two text lines
//     [0.22, 0.32].forEach((yOff, i) => {
//       const tw = i === 0 ? W * 0.7 : W * 0.5;
//       const line = new THREE.Mesh(
//         new THREE.BoxGeometry(tw, 0.038, 0.008),
//         new THREE.MeshBasicMaterial({
//           color: 0x9aaec8,
//           transparent: true,
//           opacity: 0.75,
//         }),
//       );
//       line.position.set(-(W - tw) / 2 + 0.06, H / 2 - 0.18 - i * 0.14, fz);
//       g.add(line);
//     });

//     // Navy input field
//     const field = new THREE.Mesh(
//       new THREE.BoxGeometry(W - 0.28, 0.12, 0.01),
//       new THREE.MeshBasicMaterial({
//         color: 0x162540,
//         transparent: true,
//         opacity: 0.88,
//       }),
//     );
//     field.position.set(0, 0.04, fz);
//     g.add(field);

//     // Gold/amber button strip
//     const btn = new THREE.Mesh(
//       new THREE.BoxGeometry(W - 0.28, 0.095, 0.012),
//       new THREE.MeshBasicMaterial({
//         color: 0xd4911a,
//         transparent: true,
//         opacity: 0.92,
//       }),
//     );
//     btn.position.set(0, -0.12, fz + 0.001);
//     g.add(btn);

//     // Check-mark lines below
//     [-0.28, -0.38].forEach((y) => {
//       const cl = new THREE.Mesh(
//         new THREE.BoxGeometry(W * 0.55, 0.022, 0.007),
//         new THREE.MeshBasicMaterial({
//           color: 0xbbc8dc,
//           transparent: true,
//           opacity: 0.7,
//         }),
//       );
//       cl.position.set(-W * 0.1, y, fz);
//       g.add(cl);
//     });
//   }

//   // Small dark icon card — </> code tag (top-right in reference)
//   buildIconCard(g, W, H, D, dark) {
//     const fz = D / 2 + 0.002;
//     // Icon background circle
//     const circ = new THREE.Mesh(
//       new THREE.CircleGeometry(W * 0.28, 32),
//       new THREE.MeshBasicMaterial({
//         color: 0x1a3560,
//         transparent: true,
//         opacity: 0.6,
//       }),
//     );
//     circ.position.set(0, 0, fz);
//     g.add(circ);

//     // The </> icon approximated with 3 thin rects
//     const iconMat = new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//       opacity: 0.9,
//     });
//     // Left chevron "<"
//     const lc1 = new THREE.Mesh(
//       new THREE.BoxGeometry(0.06, 0.15, 0.01),
//       iconMat,
//     );
//     lc1.rotation.z = 0.6;
//     lc1.position.set(-0.14, 0.05, fz + 0.002);
//     g.add(lc1);
//     const lc2 = new THREE.Mesh(
//       new THREE.BoxGeometry(0.06, 0.15, 0.01),
//       iconMat,
//     );
//     lc2.rotation.z = -0.6;
//     lc2.position.set(-0.14, -0.05, fz + 0.002);
//     g.add(lc2);
//     // Right chevron ">"
//     const rc1 = new THREE.Mesh(
//       new THREE.BoxGeometry(0.06, 0.15, 0.01),
//       iconMat,
//     );
//     rc1.rotation.z = -0.6;
//     rc1.position.set(0.14, 0.05, fz + 0.002);
//     g.add(rc1);
//     const rc2 = new THREE.Mesh(
//       new THREE.BoxGeometry(0.06, 0.15, 0.01),
//       iconMat,
//     );
//     rc2.rotation.z = 0.6;
//     rc2.position.set(0.14, -0.05, fz + 0.002);
//     g.add(rc2);
//     // Slash "/"
//     const sl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.26, 0.01), iconMat);
//     sl.rotation.z = -0.36;
//     sl.position.set(0, 0, fz + 0.002);
//     g.add(sl);
//   }

//   /* ════════════════════════════════════════════════════════
//      CONNECTIONS — thin gold orthogonal/right-angle lines
//      Reference: lines go horizontally then vertically (L-shaped)
//      with a small gold dot at the corner elbow
//   ════════════════════════════════════════════════════════ */
//   buildConnections() {
//     const goldLineMat = () =>
//       new THREE.LineBasicMaterial({
//         color: 0xd4911a,
//         transparent: true,
//         opacity: 0.55,
//         linewidth: 1,
//       });
//     const dotMat = new THREE.MeshBasicMaterial({ color: 0xd4911a });

//     this.cards.forEach((card, idx) => {
//       const end = card.userData.targetPos.clone();
//       const origin = new THREE.Vector3(0, 0, 0.3);

//       // Elbow point — go halfway horizontally then up/down to card
//       const elbow = new THREE.Vector3(
//         end.x * 0.55,
//         origin.y + (end.y - origin.y) * 0.45,
//         (origin.z + end.z) * 0.5,
//       );

//       const pts = [origin, elbow, end];
//       const geo = new THREE.BufferGeometry().setFromPoints(pts);
//       const line = new THREE.Line(geo, goldLineMat());
//       this.scene.add(line);

//       // Elbow dot
//       const elbowDot = new THREE.Mesh(
//         new THREE.SphereGeometry(0.038, 10, 10),
//         dotMat,
//       );
//       elbowDot.position.copy(elbow);
//       this.scene.add(elbowDot);

//       // End dot (where line meets card)
//       const endDot = new THREE.Mesh(
//         new THREE.SphereGeometry(0.038, 10, 10),
//         dotMat,
//       );
//       endDot.position.copy(end);
//       this.scene.add(endDot);

//       // Animated flow bead
//       const beadMat = new THREE.MeshStandardMaterial({
//         color: 0xffdd66,
//         emissive: 0xffcc33,
//         emissiveIntensity: 2.0,
//         transparent: true,
//         opacity: 0.95,
//         roughness: 0.0,
//       });
//       const bead = new THREE.Mesh(
//         new THREE.SphereGeometry(0.048, 12, 12),
//         beadMat,
//       );
//       bead.visible = false;
//       this.scene.add(bead);

//       // Tail beads
//       const tails = [1, 2, 3].map((n) => {
//         const tm = new THREE.MeshBasicMaterial({
//           color: 0xffdd66,
//           transparent: true,
//           opacity: 0.55 / n,
//         });
//         const t = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), tm);
//         t.visible = false;
//         this.scene.add(t);
//         return t;
//       });

//       // Store the polyline for bead animation
//       const curve = new THREE.CatmullRomCurve3(pts);

//       this.connLines.push({
//         line,
//         card,
//         curve,
//         geo,
//         goldLineMat: line.material,
//       });
//       this.flowBeads.push({
//         bead,
//         beadMat,
//         tails,
//         curve,
//         card,
//         offset: idx * 0.25,
//         speed: 0.22 + idx * 0.03,
//       });
//     });
//   }

//   /* ════════════════════════════════════════════════════════
//      HTML LABELS — clean floating labels matching reference
//   ════════════════════════════════════════════════════════ */
//   buildLabels() {
//     const container = document.getElementById("hero3dLabels");
//     if (!container) return;
//     container.innerHTML = "";

//     // Map card IDs to icon chars
//     const icons = {
//       code: "</>",
//       analytics: "↗",
//       browser: "⬡",
//       "icon-code": "🔐",
//     };

//     this.cards.forEach((card) => {
//       const el = document.createElement("div");
//       el.style.cssText = `
//         position:absolute;
//         display:flex; flex-direction:column; gap:1px;
//         background:rgba(255,255,255,0.96);
//         border:1px solid rgba(13,27,42,0.11);
//         border-radius:9px;
//         padding:7px 13px 8px;
//         box-shadow:0 6px 24px rgba(13,27,42,0.10),0 1px 4px rgba(13,27,42,0.06);
//         backdrop-filter:blur(10px);
//         font-family:'DM Sans',sans-serif;
//         pointer-events:all; cursor:pointer;
//         opacity:0;
//         transition:opacity 0.4s ease, transform 0.22s ease, box-shadow 0.22s ease;
//         white-space:nowrap;
//         transform:translate(-50%,-100%) translateY(-8px);
//       `;

//       const titleEl = document.createElement("span");
//       titleEl.textContent = card.userData.label;
//       titleEl.style.cssText =
//         "font-size:.7rem;font-weight:700;color:#0d1b2a;letter-spacing:.03em;";

//       const subEl = document.createElement("span");
//       subEl.textContent = card.userData.sub;
//       subEl.style.cssText = "font-size:.58rem;color:#7890b0;";

//       el.appendChild(titleEl);
//       el.appendChild(subEl);
//       container.appendChild(el);

//       el.addEventListener("mouseenter", () => {
//         card.userData.isHovered = true;
//       });
//       el.addEventListener("mouseleave", () => {
//         card.userData.isHovered = false;
//       });

//       this.labels.push({ el, card });
//     });
//   }

//   /* ════════════════════════════════════════════════════════
//      BACKGROUND PARTICLES — subtle dots grid matching reference
//   ════════════════════════════════════════════════════════ */
//   buildParticles() {
//     const N = 120;
//     const pos = [],
//       col = [];
//     const lightBlue = new THREE.Color(0xb8c8e0);
//     const veryLight = new THREE.Color(0xd8e0f0);
//     for (let i = 0; i < N; i++) {
//       pos.push(
//         (Math.random() - 0.5) * 26,
//         (Math.random() - 0.5) * 18,
//         (Math.random() - 0.5) * 6 - 3,
//       );
//       const c = Math.random() < 0.4 ? lightBlue : veryLight;
//       col.push(c.r, c.g, c.b);
//     }
//     const geo = new THREE.BufferGeometry();
//     geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
//     geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
//     this.ptSys = new THREE.Points(
//       geo,
//       new THREE.PointsMaterial({
//         size: 0.045,
//         vertexColors: true,
//         transparent: true,
//         opacity: 0.45,
//       }),
//     );
//     this.ptData = Array.from({ length: N }, () => ({
//       sp: 0.0008 + Math.random() * 0.001,
//     }));
//     this.scene.add(this.ptSys);
//   }

//   /* ════════════════════════════════════════════════════════
//      ANIMATION LOOP
//   ════════════════════════════════════════════════════════ */
//   animate() {
//     requestAnimationFrame(() => this.animate());
//     this.time += 0.016;
//     this.entrance = Math.min(1, this.entrance + 0.009);

//     // hover detection
//     this.raycaster.setFromCamera(this.mouse, this.camera);
//     const hits = this.raycaster.intersectObjects(this.hitMeshes);
//     const hovered = hits.length ? hits[0].object.userData.cardGroup : null;
//     this.cards.forEach((c) => {
//       c.userData.isHovered = c === hovered;
//     });

//     /* ── Logo ── */
//     const lt = this.eob(Math.min(1, this.entrance * 1.5));
//     this.logoGroup.scale.setScalar(Math.max(0, lt));
//     this.logoGroup.position.y = -2.27 + Math.sin(this.time * 0.5) * 0.07;
//     this.logoGroup.rotation.y = Math.sin(this.time * 0.28) * 0.06;
//     this.goldPt.intensity = 1.8 + Math.sin(this.time * 1.4) * 0.3;
//     this.glowM.opacity = 0.012 + Math.sin(this.time * 1.1) * 0.005;

//     /* ── Cards ── */
//     this.cards.forEach((card, idx) => {
//       const raw = Math.max(0, this.entrance - 0.25 - card.userData.delay);
//       const t = this.eob(Math.min(1, raw * 2.2));
//       card.userData.entranceT = t;

//       const isH = card.userData.isHovered;
//       const targetS = isH ? t * 1.07 : t;
//       card.scale.setScalar(this.lp(card.scale.x, targetS, 0.09));

//       card.position.y =
//         card.userData.targetPos.y +
//         Math.sin(this.time * 0.55 + idx * 1.6) * 0.055;
//       card.position.x =
//         card.userData.targetPos.x + Math.sin(this.time * 0.35 + idx) * 0.01;

//       const dr = card.userData.defRot;
//       const hoverTiltY = isH ? dr.y * 0.3 : dr.y;
//       card.rotation.x = this.lp(card.rotation.x, dr.x, 0.07);
//       card.rotation.y = this.lp(card.rotation.y, hoverTiltY, 0.07);
//       card.rotation.z = this.lp(card.rotation.z, dr.z, 0.07);

//       if (isH) {
//         card.userData.bodyMat.emissiveIntensity = this.lp(
//           card.userData.bodyMat.emissiveIntensity || 0,
//           0.06,
//           0.1,
//         );
//         card.userData.bodyMat.emissive = new THREE.Color(0xffffff);
//       } else {
//         card.userData.bodyMat.emissiveIntensity = this.lp(
//           card.userData.bodyMat.emissiveIntensity || 0,
//           0,
//           0.08,
//         );
//       }
//     });

//     /* ── Flow beads on connections ── */
//     this.flowBeads.forEach((fb) => {
//       const { bead, beadMat, tails, curve, card, offset, speed } = fb;
//       const ready = card.userData.entranceT > 0.7;
//       bead.visible = ready;
//       tails.forEach((t) => (t.visible = ready));
//       if (!ready) return;

//       const isH = card.userData.isHovered;
//       const t = (((this.time * speed * 0.1 + offset) % 1) + 1) % 1;
//       bead.position.copy(curve.getPoint(t));
//       beadMat.emissiveIntensity = isH ? 3.5 : 2.0;
//       tails.forEach((tail, ti) => {
//         const to = (((t - (ti + 1) * 0.025 + 1) % 1) + 1) % 1;
//         tail.position.copy(curve.getPoint(to));
//       });
//     });

//     /* ── Connection line opacity ── */
//     this.connLines.forEach((conn) => {
//       const ready = conn.card.userData.entranceT > 0.5;
//       const isH = conn.card.userData.isHovered;
//       conn.goldLineMat.opacity = this.lp(
//         conn.goldLineMat.opacity,
//         ready ? (isH ? 0.85 : 0.5) : 0,
//         0.05,
//       );
//     });

//     /* ── Particles drift ── */
//     if (this.ptSys) {
//       const pos = this.ptSys.geometry.attributes.position;
//       for (let i = 0; i < pos.count; i++) {
//         pos.setY(i, pos.getY(i) + this.ptData[i].sp);
//         if (pos.getY(i) > 9) pos.setY(i, -9);
//       }
//       pos.needsUpdate = true;
//     }

//     /* ── Labels ── */
//     this.updateLabels();

//     this.renderer.render(this.scene, this.camera);
//   }

//   updateLabels() {
//     const W = this.canvas.clientWidth,
//       H = this.canvas.clientHeight;
//     this.labels.forEach(({ el, card }) => {
//       const p = card.position.clone().project(this.camera);
//       const sx = (p.x * 0.5 + 0.5) * W;
//       const sy = -(p.y * 0.5 - 0.5) * H;
//       el.style.left = sx + "px";
//       el.style.top = sy - 12 + "px";

//       const vis = p.z < 1 && card.scale.x > 0.06;
//       el.style.opacity = vis ? "1" : "0";

//       if (card.userData.isHovered) {
//         el.style.transform =
//           "translate(-50%,-100%) translateY(-8px) scale(1.06)";
//         el.style.boxShadow = "0 8px 30px rgba(13,27,42,0.15)";
//       } else {
//         el.style.transform = "translate(-50%,-100%) translateY(-8px) scale(1)";
//         el.style.boxShadow =
//           "0 6px 24px rgba(13,27,42,0.10),0 1px 4px rgba(13,27,42,0.06)";
//       }
//     });
//   }

//   /* ── Utils ── */
//   eob(t) {
//     // easeOutBack
//     const c1 = 1.70158,
//       c3 = c1 + 1;
//     return t <= 0
//       ? 0
//       : t >= 1
//         ? 1
//         : 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
//   }
//   lp(a, b, t) {
//     return a + (b - a) * t;
//   }

//   onMouse(e) {
//     const r = this.canvas.getBoundingClientRect();
//     this.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
//     this.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
//   }

//   onResize() {
//     const W = this.canvas.clientWidth,
//       H = this.canvas.clientHeight;
//     this.camera.aspect = W / H;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(W, H);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   new Hero3DScene();
// });
class Hero3DScene {
  constructor() {
    this.canvas = document.getElementById("heroCanvas");
    if (!this.canvas) return;

    // ── Scene ──────────────────────────────────────────────────────
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf7f8fc);

    // ── Camera ─────────────────────────────────────────────────────
    // Matches reference: slight elevation, looking down at ~15°
    const W = this.canvas.clientWidth || 640;
    const H = this.canvas.clientHeight || 640;
    this.camera = new THREE.PerspectiveCamera(44, W / H, 0.1, 200);
    this.camera.position.set(0, 4.2, 13.5);
    this.camera.lookAt(0, -0.2, 0);

    // ── Renderer ───────────────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setSize(W, H);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ── State ──────────────────────────────────────────────────────
    this.time = 0;
    this.entrance = 0;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-99, -99);
    this.cards = [];
    this.hitMeshes = [];
    this.connData = [];
    this.labels = [];

    // ── Build scene ────────────────────────────────────────────────
    this.buildLights();
    this.buildPlatform();
    this.buildLogoK();
    this.buildCards();
    this.buildConnections();
    this.buildLabels();
    this.buildDotGrid();

    // ── Events ─────────────────────────────────────────────────────
    window.addEventListener("resize", () => this.onResize());
    this.canvas.addEventListener("mousemove", (e) => this.onMouse(e));
    this.canvas.addEventListener("mouseleave", () => this.mouse.set(-99, -99));

    this.animate();
  }

  // ═══════════════════════════════════════════════════════════
  //  LIGHTS — studio setup matching reference warm/cool split
  // ═══════════════════════════════════════════════════════════
  buildLights() {
    // Generous ambient keeps whites bright
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    // Primary key — upper-left warm directional
    const key = new THREE.DirectionalLight(0xfff9f0, 1.15);
    key.position.set(-5, 12, 9);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -10;
    key.shadow.camera.right = 10;
    key.shadow.camera.top = 10;
    key.shadow.camera.bottom = -10;
    key.shadow.bias = -0.0008;
    this.scene.add(key);

    // Secondary fill — cool from right
    const fill = new THREE.DirectionalLight(0xddeeff, 0.4);
    fill.position.set(9, 3, 7);
    this.scene.add(fill);

    // Gold accent point — behind/below the K, creates the warm glow
    this.goldPt = new THREE.PointLight(0xd4a44a, 2.8, 14);
    this.goldPt.position.set(0.3, -1.0, 2.8);
    this.scene.add(this.goldPt);

    // Subtle under-rim — bounces off platform
    const underRim = new THREE.PointLight(0xffffff, 0.3, 18);
    underRim.position.set(0, -6, 5);
    this.scene.add(underRim);
  }

  // ═══════════════════════════════════════════════════════════
  //  PLATFORM — two-tier white plinth (reference: rounded rect)
  //  Approximated with bevelled BoxGeometry stacks
  // ═══════════════════════════════════════════════════════════
  buildPlatform() {
    const tiers = [
      // [width, depth, height, y, colour, shadow]
      [6.6, 5.2, 0.26, -2.56, 0xeef0f7, true],
      [8.4, 6.6, 0.2, -2.83, 0xe4e7f2, false],
    ];
    tiers.forEach(([w, d, h, y, col, sh]) => {
      // Main slab
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        metalness: 0.04,
        roughness: 0.55,
      });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      mesh.position.y = y;
      mesh.receiveShadow = sh;
      this.scene.add(mesh);

      // Round the four vertical edges with cylinders
      const cR = 0.28,
        cH = h + 0.01;
      const cGeo = new THREE.CylinderGeometry(cR, cR, cH, 20);
      const cMat = new THREE.MeshStandardMaterial({
        color: col,
        metalness: 0.04,
        roughness: 0.55,
      });
      [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ].forEach(([sx, sz]) => {
        const c = new THREE.Mesh(cGeo, cMat);
        c.position.set(sx * (w / 2 - cR), y, sz * (d / 2 - cR));
        c.receiveShadow = sh;
        this.scene.add(c);
      });
    });

    // Faint edge glow along the bottom of upper tier (reference has warm rim)
    const rimGeo = new THREE.BoxGeometry(6.64, 0.04, 5.24);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0xd4a44a,
      transparent: true,
      opacity: 0.18,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.y = -2.56 - 0.14;
    this.scene.add(rim);
  }

  // ═══════════════════════════════════════════════════════════
  //  LOGO K — precision-built to match reference letterform
  //
  //  Reference analysis:
  //  • Vertical bar: tall, left-offset, square cross-section, navy
  //  • Upper arm:    diagonal ~42° upward-right from mid-bar, navy
  //  • Lower arm:    diagonal ~42° downward-right from mid-bar, GOLD
  //  • Both arms are the SAME thickness as the bar
  //  • The arms visually form a ">" chevron on the right side
  //  • Sits on the platform, not floating
  // ═══════════════════════════════════════════════════════════
  buildLogoK() {
    this.logoGroup = new THREE.Group();

    // Shared materials
    const navyMat = new THREE.MeshStandardMaterial({
      color: 0x0b1f3a,
      metalness: 0.5,
      roughness: 0.32,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a44a,
      metalness: 0.62,
      roughness: 0.2,
    });

    // ── 1. Vertical bar ────────────────────────────────────────
    const BAR_H = 3.1; // tall
    const BAR_W = 0.56; // square cross-section
    const BAR_D = 0.56;

    const vBar = new THREE.Mesh(
      new THREE.BoxGeometry(BAR_W, BAR_H, BAR_D),
      navyMat,
    );
    vBar.position.set(-0.24, 0.18, 0);
    vBar.castShadow = true;
    this.logoGroup.add(vBar);

    // Rounded top cap
    const topSphere = new THREE.Mesh(
      new THREE.SphereGeometry(
        BAR_W * 0.5,
        16,
        8,
        0,
        Math.PI * 2,
        0,
        Math.PI * 0.5,
      ),
      navyMat,
    );
    topSphere.position.set(-0.24, 0.18 + BAR_H * 0.5, 0);
    this.logoGroup.add(topSphere);

    // Rounded bottom cap
    const botSphere = new THREE.Mesh(
      new THREE.SphereGeometry(
        BAR_W * 0.5,
        16,
        8,
        0,
        Math.PI * 2,
        Math.PI * 0.5,
        Math.PI * 0.5,
      ),
      navyMat,
    );
    botSphere.position.set(-0.24, 0.18 - BAR_H * 0.5, 0);
    this.logoGroup.add(botSphere);

    // ── 2. Upper arm (navy) ────────────────────────────────────
    // Angle: ~42° from horizontal (reference shows arm going steeply up-right)
    const ARM_LEN = 1.8;
    const ARM_W = 0.5; // same thickness as bar
    const ARM_D = 0.54;
    const ANGLE = 0.735; // radians ≈ 42°

    const uArm = new THREE.Mesh(
      new THREE.BoxGeometry(ARM_LEN, ARM_W, ARM_D),
      navyMat,
    );
    uArm.rotation.z = -ANGLE;
    // Position so the left end meets the vertical bar at ~mid-height
    uArm.position.set(
      -0.24 + BAR_W * 0.5 + ARM_LEN * 0.5 * Math.cos(ANGLE) - 0.1,
      0.18 + ARM_LEN * 0.5 * Math.sin(ANGLE) - 0.05,
      0,
    );
    uArm.castShadow = true;
    this.logoGroup.add(uArm);

    // ── 3. Lower arm (GOLD) ────────────────────────────────────
    const lArm = new THREE.Mesh(
      new THREE.BoxGeometry(ARM_LEN, ARM_W, ARM_D),
      goldMat,
    );
    lArm.rotation.z = ANGLE; // mirror of upper
    lArm.position.set(
      -0.24 + BAR_W * 0.5 + ARM_LEN * 0.5 * Math.cos(ANGLE) - 0.1,
      0.18 - ARM_LEN * 0.5 * Math.sin(ANGLE) + 0.05,
      0.01, // slightly in front for the gold to catch light
    );
    lArm.castShadow = true;
    this.logoGroup.add(lArm);

    // ── 4. Specular glint strip (reference: white highlight on bar face) ──
    const glintMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.09,
    });
    const glint = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, BAR_H * 0.7, 0.01),
      glintMat,
    );
    glint.position.set(-0.24 - BAR_W * 0.4, 0.18, BAR_D * 0.5 + 0.006);
    this.logoGroup.add(glint);

    // ── 5. Back glow plane ──
    this.glowMat = new THREE.MeshBasicMaterial({
      color: 0xd4a44a,
      transparent: true,
      opacity: 0.0,
      side: THREE.FrontSide,
    });
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(5.5, 5.5),
      this.glowMat,
    );
    glow.position.z = -0.55;
    this.logoGroup.add(glow);

    // Position: on top of platform, slight forward tilt
    this.logoGroup.position.set(0.06, -2.28, 0);
    this.logoGroup.rotation.x = 0.03; // very slight backward lean
    this.logoGroup.scale.setScalar(0); // animates in
    this.scene.add(this.logoGroup);
  }

  // ═══════════════════════════════════════════════════════════
  //  CARDS — premium glass/solid panels matching reference
  //
  //  Reference layout (from image analysis):
  //  [TL] Dark code editor panel   — top-left, large, landscape
  //  [BL] Light analytics panel    — bottom-left, smaller
  //  [TR] Small dark </> icon      — top-right, square
  //  [MR] Light browser/form panel — right-center, landscape
  //  [BR] Small dark box icon      — bottom-right, square (partial)
  // ═══════════════════════════════════════════════════════════
  buildCards() {
    const defs = [
      {
        key: "code",
        pos: [-3.1, 1.7, 0.6],
        rot: [0.04, 0.28, -0.02],
        W: 2.1,
        H: 1.55,
        D: 0.1,
        dark: true,
        label: "Clean Code",
        sub: "Typed · Tested · Maintainable",
        delay: 0.04,
      },
      {
        key: "analytics",
        pos: [-2.95, -0.8, 0.45],
        rot: [-0.03, 0.25, 0.02],
        W: 1.65,
        H: 1.25,
        D: 0.1,
        dark: false,
        label: "Design",
        sub: "Pixel-perfect interfaces",
        delay: 0.18,
      },
      {
        key: "tag",
        pos: [2.65, 2.1, 0.55],
        rot: [0.05, -0.26, -0.03],
        W: 0.92,
        H: 0.92,
        D: 0.11,
        dark: true,
        label: "Security",
        sub: "Zero-trust · OWASP",
        delay: 0.0,
      },
      {
        key: "browser",
        pos: [3.2, -0.3, 0.55],
        rot: [-0.03, -0.26, 0.02],
        W: 1.9,
        H: 1.4,
        D: 0.1,
        dark: false,
        label: "System Scaling",
        sub: "Cloud · Microservices",
        delay: 0.11,
      },
      {
        key: "box",
        pos: [2.55, -1.8, 0.4],
        rot: [0.04, -0.24, 0.02],
        W: 0.88,
        H: 0.88,
        D: 0.11,
        dark: true,
        label: "Reliability",
        sub: "99.99% uptime",
        delay: 0.22,
      },
    ];

    defs.forEach((def, idx) => {
      const g = new THREE.Group();
      const { W, H, D } = def;
      const fz = D * 0.5 + 0.002; // z offset for front-face elements

      // ── Body ──────────────────────────────────────────────
      const bodyColor = def.dark ? 0x0b1f3a : 0xf4f6fc;
      this.bodyMat = new THREE.MeshStandardMaterial({
        color: bodyColor,
        metalness: def.dark ? 0.08 : 0.03,
        roughness: def.dark ? 0.3 : 0.18,
        transparent: true,
        opacity: def.dark ? 0.97 : 0.95,
      });
      // Store on def for per-card reference
      def._bodyMat = this.bodyMat;

      const body = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), def._bodyMat);
      body.castShadow = true;
      body.receiveShadow = true;
      body.userData.cardGroup = g;
      g.add(body);
      this.hitMeshes.push(body);

      // ── Border ────────────────────────────────────────────
      const borderColor = def.dark ? 0x1e3a5f : 0xd4daea;
      const bLineMat = new THREE.LineBasicMaterial({
        color: borderColor,
        transparent: true,
        opacity: 0.65,
      });
      const corners = [
        [-W / 2, -H / 2],
        [W / 2, -H / 2],
        [W / 2, H / 2],
        [-W / 2, H / 2],
        [-W / 2, -H / 2],
      ].map(([x, y]) => new THREE.Vector3(x, y, fz));
      g.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(corners),
          bLineMat,
        ),
      );

      // ── Content (card-specific) ────────────────────────────
      this._buildCardContent(g, def, W, H, D, fz);

      // ── Drop shadow plane ─────────────────────────────────
      const shMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(W * 1.15, H * 0.25),
        new THREE.MeshBasicMaterial({
          color: 0x0b1f3a,
          transparent: true,
          opacity: 0.06,
        }),
      );
      shMesh.rotation.x = -Math.PI * 0.5;
      shMesh.position.set(0.08, -H * 0.5 - 0.04, -0.04);
      g.add(shMesh);

      // ── Group setup ───────────────────────────────────────
      g.position.set(...def.pos);
      g.rotation.set(...def.rot);
      g.scale.setScalar(0);
      g.userData = {
        ...def,
        _bodyMat: def._bodyMat,
        targetPos: new THREE.Vector3(...def.pos),
        defRot: new THREE.Euler(...def.rot),
        entranceT: 0,
        isHovered: false,
        idx,
      };

      this.scene.add(g);
      this.cards.push(g);
    });
  }

  _buildCardContent(g, def, W, H, D, fz) {
    switch (def.key) {
      // ── Dark code editor (top-left) ───────────────────────
      case "code": {
        // Title bar with 3 traffic dots
        const tbMat = new THREE.MeshBasicMaterial({ color: 0x0d2240 });
        const titleBar = new THREE.Mesh(
          new THREE.BoxGeometry(W, 0.17, 0.01),
          tbMat,
        );
        titleBar.position.set(0, H / 2 - 0.085, fz);
        g.add(titleBar);
        // Traffic dots
        [0xdd5050, 0xddaa30, 0x44aa55].forEach((c, i) => {
          const d = new THREE.Mesh(
            new THREE.CircleGeometry(0.028, 14),
            new THREE.MeshBasicMaterial({ color: c }),
          );
          d.position.set(-W / 2 + 0.1 + i * 0.085, H / 2 - 0.085, fz + 0.001);
          g.add(d);
        });
        // Syntax lines — coloured, varied lengths
        const syntaxLines = [
          [0.6, 0.0, 0xffaa33],
          [0.8, 0.06, 0x55ccff],
          [0.44, 0.12, 0xffaa33],
          [0.58, 0.0, 0xff7777],
          [0.7, 0.06, 0x88ff88],
          [0.48, 0.12, 0xaaaaff],
          [0.62, 0.06, 0x55ccff],
        ];
        syntaxLines.forEach(([lw, indent, col], i) => {
          const lm = new THREE.MeshBasicMaterial({
            color: col,
            transparent: true,
            opacity: 0.88,
          });
          const line = new THREE.Mesh(
            new THREE.BoxGeometry(lw, 0.04, 0.008),
            lm,
          );
          line.position.set(
            -W / 2 + 0.15 + indent + lw / 2,
            H / 2 - 0.24 - i * 0.13,
            fz + 0.001,
          );
          g.add(line);
          // Dim indent ghost
          const ghost = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, 0.028, 0.006),
            new THREE.MeshBasicMaterial({
              color: 0x233755,
              transparent: true,
              opacity: 0.8,
            }),
          );
          ghost.position.set(
            -W / 2 + 0.15 + 0.09,
            H / 2 - 0.24 - i * 0.13,
            fz + 0.001,
          );
          g.add(ghost);
        });
        break;
      }

      // ── Light analytics card (bottom-left) ────────────────
      case "analytics": {
        // User icon placeholder
        const headM = new THREE.MeshBasicMaterial({
          color: 0x2d4e7a,
          transparent: true,
          opacity: 0.45,
        });
        const head = new THREE.Mesh(new THREE.CircleGeometry(0.1, 20), headM);
        head.position.set(-W / 2 + 0.24, H / 2 - 0.25, fz);
        g.add(head);
        // Label line
        const labelLine = new THREE.Mesh(
          new THREE.BoxGeometry(0.55, 0.034, 0.008),
          new THREE.MeshBasicMaterial({
            color: 0x9aaec8,
            transparent: true,
            opacity: 0.8,
          }),
        );
        labelLine.position.set(-W / 2 + 0.6, H / 2 - 0.25, fz);
        g.add(labelLine);
        // Divider
        const divider = new THREE.Mesh(
          new THREE.BoxGeometry(W - 0.22, 0.012, 0.006),
          new THREE.MeshBasicMaterial({
            color: 0xd0d8ea,
            transparent: true,
            opacity: 0.7,
          }),
        );
        divider.position.set(0, H / 2 - 0.45, fz);
        g.add(divider);
        // Bar chart — 3 bars, center navy
        [
          { h: 0.25, col: 0x1a3560 },
          { h: 0.4, col: 0x1a3560 },
          { h: 0.3, col: 0x1a3560 },
        ].forEach(({ h, col }, i) => {
          const bar = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, h, 0.01),
            new THREE.MeshBasicMaterial({
              color: col,
              transparent: true,
              opacity: 0.85,
            }),
          );
          bar.position.set(
            -W / 2 + 0.28 + i * 0.33,
            -H / 2 + h / 2 + 0.2,
            fz + 0.001,
          );
          g.add(bar);
        });
        // Small stat lines on right
        [0.1, 0.0, -0.1].forEach((dy, i) => {
          const statLine = new THREE.Mesh(
            new THREE.BoxGeometry(0.38, 0.022, 0.007),
            new THREE.MeshBasicMaterial({
              color: i === 0 ? 0x2d4e7a : 0xc4d0e2,
              transparent: true,
              opacity: 0.78,
            }),
          );
          statLine.position.set(W / 2 - 0.32, dy, fz);
          g.add(statLine);
        });
        break;
      }

      // ── Small dark </> icon (top-right) ───────────────────
      case "tag": {
        // Dark badge background circle
        const badge = new THREE.Mesh(
          new THREE.CircleGeometry(W * 0.3, 32),
          new THREE.MeshBasicMaterial({
            color: 0x1a3560,
            transparent: true,
            opacity: 0.55,
          }),
        );
        badge.position.set(0, 0, fz);
        g.add(badge);
        // </> approximated with angled strips
        const wM = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.92,
        });
        // Left "<"
        [[0.52], [-0.52]].forEach(([ry]) => {
          const s = new THREE.Mesh(
            new THREE.BoxGeometry(0.055, 0.155, 0.01),
            wM,
          );
          s.rotation.z = ry;
          s.position.set(-0.15, ry > 0 ? 0.045 : -0.045, fz + 0.002);
          g.add(s);
        });
        // Right ">"
        [[-0.52], [0.52]].forEach(([ry], i) => {
          const s = new THREE.Mesh(
            new THREE.BoxGeometry(0.055, 0.155, 0.01),
            wM,
          );
          s.rotation.z = ry;
          s.position.set(0.15, i === 0 ? 0.045 : -0.045, fz + 0.002);
          g.add(s);
        });
        // Slash
        const sl = new THREE.Mesh(
          new THREE.BoxGeometry(0.048, 0.285, 0.01),
          wM,
        );
        sl.rotation.z = -0.38;
        sl.position.set(0, 0, fz + 0.002);
        g.add(sl);
        break;
      }

      // ── Light browser/form card (right) ───────────────────
      case "browser": {
        // Browser chrome bar
        const chromeBar = new THREE.Mesh(
          new THREE.BoxGeometry(W, 0.14, 0.01),
          new THREE.MeshBasicMaterial({
            color: 0xe6eaf4,
            transparent: true,
            opacity: 0.9,
          }),
        );
        chromeBar.position.set(0, H / 2 - 0.07, fz);
        g.add(chromeBar);
        // URL pill
        const urlPill = new THREE.Mesh(
          new THREE.BoxGeometry(W * 0.52, 0.056, 0.008),
          new THREE.MeshBasicMaterial({
            color: 0xd0d8ea,
            transparent: true,
            opacity: 0.9,
          }),
        );
        urlPill.position.set(-0.04, H / 2 - 0.07, fz + 0.001);
        g.add(urlPill);
        // Two text placeholder lines
        [0, 1].forEach((i) => {
          const lw = i === 0 ? W * 0.65 : W * 0.45;
          const textLine = new THREE.Mesh(
            new THREE.BoxGeometry(lw, 0.036, 0.008),
            new THREE.MeshBasicMaterial({
              color: 0x9aaec8,
              transparent: true,
              opacity: 0.72,
            }),
          );
          textLine.position.set(
            -(W - lw) / 2 + 0.07,
            H / 2 - 0.22 - i * 0.13,
            fz,
          );
          g.add(textLine);
        });
        // Navy input field
        const inputField = new THREE.Mesh(
          new THREE.BoxGeometry(W - 0.3, 0.115, 0.01),
          new THREE.MeshBasicMaterial({
            color: 0x0b1f3a,
            transparent: true,
            opacity: 0.88,
          }),
        );
        inputField.position.set(0, 0.05, fz);
        g.add(inputField);
        // Gold/amber submit button
        const submitButton = new THREE.Mesh(
          new THREE.BoxGeometry(W - 0.3, 0.092, 0.012),
          new THREE.MeshBasicMaterial({
            color: 0xd4a44a,
            transparent: true,
            opacity: 0.94,
          }),
        );
        submitButton.position.set(0, -0.1, fz + 0.001);
        g.add(submitButton);
        // Check-mark lines
        [-0.27, -0.37].forEach((y) => {
          const checkLine = new THREE.Mesh(
            new THREE.BoxGeometry(W * 0.52, 0.02, 0.007),
            new THREE.MeshBasicMaterial({
              color: 0xbbc8dc,
              transparent: true,
              opacity: 0.65,
            }),
          );
          checkLine.position.set(-W * 0.1, y, fz);
          g.add(checkLine);
        });
        break;
      }

      // ── Small dark box/package icon (bottom-right) ────────
      case "box": {
        const wM2 = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.88,
        });
        // Outer hex outline (simplified box icon)
        const hexPts = [];
        for (let i = 0; i < 7; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
          hexPts.push(
            new THREE.Vector3(
              Math.cos(a) * 0.24,
              Math.sin(a) * 0.24,
              fz + 0.002,
            ),
          );
        }
        g.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(hexPts),
            new THREE.LineBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.75,
              linewidth: 1,
            }),
          ),
        );
        // Inner detail lines (package ridges)
        [
          [0, -0.24, 0, 0.24],
          [-0.2, 0.12, 0.2, 0.12],
          [-0.2, -0.12, 0.2, -0.12],
        ].forEach(([x1, y1, x2, y2]) => {
          if (x1 === undefined) return;
          const pts = [
            new THREE.Vector3(x1, y1, fz + 0.003),
            new THREE.Vector3(x2, y2, fz + 0.003),
          ];
          g.add(
            new THREE.Line(
              new THREE.BufferGeometry().setFromPoints(pts),
              new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5,
              }),
            ),
          );
        });
        break;
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  CONNECTIONS — thin gold orthogonal (right-angle) routes
  //  Reference: lines go horizontal then vertical with 90° bends
  //  Small gold dot nodes at origin, elbow, and card endpoint
  // ═══════════════════════════════════════════════════════════
  buildConnections() {
    const GOLD = 0xd4a44a;
    const nodeDotGeo = new THREE.SphereGeometry(0.042, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: GOLD,
      emissive: GOLD,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });

    // Central origin node
    const originDot = new THREE.Mesh(nodeDotGeo, nodeMat);
    originDot.position.set(0, 0, 0.28);
    this.scene.add(originDot);
    this.originDot = originDot;

    this.cards.forEach((card, idx) => {
      const tp = card.userData.targetPos;
      const origin = new THREE.Vector3(0, 0, 0.28);

      // ── Build an L-shaped / 90°-bend path ──────────────────
      // Route: origin → horizontal junction → card
      // The horizontal junction is at (tp.x * 0.6, origin.y, midZ)
      const juncX = tp.x * 0.58;
      const juncY = origin.y + (tp.y - origin.y) * 0.4;
      const juncZ = (origin.z + tp.z) * 0.5;
      const junc = new THREE.Vector3(juncX, juncY, juncZ);

      // Card endpoint (face of card, not center)
      const cardEnd = new THREE.Vector3(
        tp.x - Math.sign(tp.x) * 0.82,
        tp.y,
        tp.z - 0.3,
      );

      const pathPoints = [origin, junc, cardEnd];

      // ── Static gold line ───────────────────────────────────
      const lineMat = new THREE.LineBasicMaterial({
        color: GOLD,
        transparent: true,
        opacity: 0.0, // fades in
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const line = new THREE.Line(lineGeo, lineMat);
      this.scene.add(line);

      // ── Elbow node ─────────────────────────────────────────
      const elbow = new THREE.Mesh(nodeDotGeo, nodeMat);
      elbow.position.copy(junc);
      elbow.visible = false;
      this.scene.add(elbow);

      // ── Card endpoint node ─────────────────────────────────
      const endNode = new THREE.Mesh(nodeDotGeo, nodeMat);
      endNode.position.copy(cardEnd);
      endNode.visible = false;
      this.scene.add(endNode);

      // ── Animated flow bead (travelling light) ──────────────
      const beadMat = new THREE.MeshStandardMaterial({
        color: 0xffe08a,
        emissive: 0xffd060,
        emissiveIntensity: 2.5,
        transparent: true,
        opacity: 0.95,
        roughness: 0.0,
      });
      const bead = new THREE.Mesh(
        new THREE.SphereGeometry(0.052, 14, 14),
        beadMat,
      );
      bead.visible = false;
      this.scene.add(bead);

      // Tail beads (3)
      const tails = [1, 2, 3].map((n) => {
        const tm = new THREE.MeshBasicMaterial({
          color: 0xffd060,
          transparent: true,
          opacity: 0.55 - n * 0.13,
        });
        const tb = new THREE.Mesh(
          new THREE.SphereGeometry(0.032 - n * 0.006, 8, 8),
          tm,
        );
        tb.visible = false;
        this.scene.add(tb);
        return tb;
      });

      // Spline through the L-path for smooth bead travel
      const spline = new THREE.CatmullRomCurve3(
        pathPoints,
        false,
        "catmullrom",
        0.0,
      );

      this.connData.push({
        line,
        lineMat,
        elbow,
        endNode,
        bead,
        beadMat,
        tails,
        spline,
        card,
        offset: idx * 0.22,
        speed: 0.2 + idx * 0.025,
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  //  DOT GRID — faint dot pattern on platform surface
  // ═══════════════════════════════════════════════════════════
  buildDotGrid() {
    const dotGeo = new THREE.CircleGeometry(0.018, 7);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xb0bee0,
      transparent: true,
      opacity: 0.4,
    });
    for (let x = -7.5; x <= 7.5; x += 0.65) {
      for (let z = -5.5; z <= 5.5; z += 0.65) {
        const d = new THREE.Mesh(dotGeo, dotMat);
        d.rotation.x = -Math.PI / 2;
        d.position.set(x, -2.68, z);
        this.scene.add(d);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  HTML LABELS — clean floating pills above each card
  // ═══════════════════════════════════════════════════════════
  buildLabels() {
    const container = document.getElementById("hero3dLabels");
    if (!container) return;
    container.innerHTML = "";

    this.cards.forEach((card) => {
      const wrap = document.createElement("div");
      wrap.style.cssText = `
        position: absolute;
        display: flex; flex-direction: column; gap: 2px;
        background: rgba(255,255,255,0.97);
        border: 1px solid rgba(13,27,42,0.10);
        border-radius: 10px;
        padding: 7px 14px 8px;
        box-shadow: 0 8px 28px rgba(13,27,42,0.09), 0 1px 4px rgba(13,27,42,0.05);
        backdrop-filter: blur(12px);
        font-family: 'DM Sans', sans-serif;
        pointer-events: all; cursor: pointer;
        opacity: 0;
        white-space: nowrap;
        transform: translate(-50%, -100%) translateY(-10px);
        transition: opacity 0.4s ease, transform 0.25s ease, box-shadow 0.25s ease;
      `;

      const t = document.createElement("span");
      t.textContent = card.userData.label;
      t.style.cssText =
        "font-size:.69rem; font-weight:700; color:#0b1f3a; letter-spacing:.03em;";

      const s = document.createElement("span");
      s.textContent = card.userData.sub;
      s.style.cssText = "font-size:.57rem; color:#7890b0; font-weight:400;";

      wrap.appendChild(t);
      wrap.appendChild(s);
      container.appendChild(wrap);

      wrap.addEventListener("mouseenter", () => {
        card.userData.isHovered = true;
      });
      wrap.addEventListener("mouseleave", () => {
        card.userData.isHovered = false;
      });

      this.labels.push({ el: wrap, card });
    });
  }

  // ═══════════════════════════════════════════════════════════
  //  ANIMATION LOOP
  // ═══════════════════════════════════════════════════════════
  animate() {
    requestAnimationFrame(() => this.animate());
    this.time += 0.016;
    this.entrance = Math.min(1, this.entrance + 0.0085);

    // Hover detection
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.hitMeshes);
    const hov = hits.length ? hits[0].object.userData.cardGroup : null;
    this.cards.forEach((c) => {
      c.userData.isHovered = c === hov;
    });

    // ── Logo entrance + idle ─────────────────────────────────
    const lt = this.eob(Math.min(1, this.entrance * 1.55));
    this.logoGroup.scale.setScalar(Math.max(0, lt));
    this.logoGroup.position.y = -2.28 + Math.sin(this.time * 0.48) * 0.065;
    this.logoGroup.rotation.y = Math.sin(this.time * 0.26) * 0.055;
    // Gold light pulse
    this.goldPt.intensity = 2.2 + Math.sin(this.time * 1.35) * 0.45;
    this.glowMat.opacity = 0.01 + Math.sin(this.time * 1.1) * 0.004;

    // Origin dot pulse
    if (this.originDot) {
      this.originDot.scale.setScalar(0.8 + Math.sin(this.time * 2.2) * 0.22);
    }

    // ── Cards ────────────────────────────────────────────────
    this.cards.forEach((card, idx) => {
      const raw = Math.max(0, this.entrance - 0.22 - card.userData.delay);
      const t = this.eob(Math.min(1, raw * 2.4));
      card.userData.entranceT = t;

      const isH = card.userData.isHovered;

      // Scale — smooth lerp to target
      const tgtS = isH ? t * 1.065 : t;
      card.scale.setScalar(this.lp(card.scale.x, tgtS, 0.1));

      // Gentle float
      card.position.y =
        card.userData.targetPos.y +
        Math.sin(this.time * 0.52 + idx * 1.7) * 0.05;
      card.position.x =
        card.userData.targetPos.x + Math.sin(this.time * 0.33 + idx) * 0.008;

      // Rotation ease on hover
      const dr = card.userData.defRot;
      const tRy = isH ? dr.y * 0.35 : dr.y;
      card.rotation.x = this.lp(card.rotation.x, dr.x, 0.07);
      card.rotation.y = this.lp(card.rotation.y, tRy, 0.07);
      card.rotation.z = this.lp(card.rotation.z, dr.z, 0.07);

      // Hover emissive
      if (card.userData._bodyMat) {
        const tei = isH ? 0.07 : 0;
        card.userData._bodyMat.emissiveIntensity = this.lp(
          card.userData._bodyMat.emissiveIntensity || 0,
          tei,
          0.1,
        );
        if (isH) card.userData._bodyMat.emissive = new THREE.Color(0xffffff);
      }
    });

    // ── Connections ──────────────────────────────────────────
    this.connData.forEach((conn) => {
      const { lineMat, elbow, endNode, bead, beadMat, tails, spline, card } =
        conn;
      const ready = card.userData.entranceT > 0.6;
      const isH = card.userData.isHovered;

      // Fade line in
      lineMat.opacity = this.lp(
        lineMat.opacity,
        ready ? (isH ? 0.8 : 0.48) : 0,
        0.045,
      );

      // Show nodes when ready
      elbow.visible = ready;
      endNode.visible = ready;
      if (ready) {
        elbow.scale.setScalar(
          0.75 + Math.sin(this.time * 2.0 + conn.offset * 5) * 0.18,
        );
        endNode.scale.setScalar(
          0.75 + Math.sin(this.time * 2.0 + conn.offset * 5 + 1) * 0.18,
        );
      }

      // Flow bead
      bead.visible = ready;
      tails.forEach((tb) => (tb.visible = ready));
      if (ready) {
        const spd = conn.speed * (isH ? 1.7 : 1.0);
        const t = (((this.time * spd * 0.1 + conn.offset) % 1) + 1) % 1;
        bead.position.copy(spline.getPoint(t));
        beadMat.emissiveIntensity = isH ? 4.0 : 2.5;
        tails.forEach((tb, ti) => {
          const to = (((t - (ti + 1) * 0.03 + 1) % 1) + 1) % 1;
          tb.position.copy(spline.getPoint(to));
        });
      }
    });

    // ── Labels ───────────────────────────────────────────────
    this.updateLabels();

    this.renderer.render(this.scene, this.camera);
  }

  updateLabels() {
    const W = this.canvas.clientWidth;
    const H = this.canvas.clientHeight;
    this.labels.forEach(({ el, card }) => {
      const p = card.position.clone().project(this.camera);
      const sx = (p.x * 0.5 + 0.5) * W;
      const sy = -(p.y * 0.5 - 0.5) * H;
      el.style.left = sx + "px";
      el.style.top = sy - 14 + "px";
      const vis = p.z < 1 && card.scale.x > 0.05;
      el.style.opacity = vis ? "1" : "0";
      if (card.userData.isHovered) {
        el.style.transform =
          "translate(-50%,-100%) translateY(-10px) scale(1.06)";
        el.style.boxShadow = "0 10px 34px rgba(13,27,42,0.14)";
      } else {
        el.style.transform = "translate(-50%,-100%) translateY(-10px) scale(1)";
        el.style.boxShadow =
          "0 8px 28px rgba(13,27,42,0.09),0 1px 4px rgba(13,27,42,0.05)";
      }
    });
  }

  // ── Helpers ─────────────────────────────────────────────────
  eob(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }
  lp(a, b, t) {
    return a + (b - a) * t;
  }

  onMouse(e) {
    const r = this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    this.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }
  onResize() {
    const W = this.canvas.clientWidth;
    const H = this.canvas.clientHeight;
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(W, H);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const scene = new Hero3DScene();
  // Ensure canvas resizes after DOM layout is fully computed
  requestAnimationFrame(() => {
    if (scene && scene.onResize) {
      scene.onResize();
    }
  });
});
