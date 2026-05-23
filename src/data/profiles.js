export const profiles = {
  webDeveloper: {
    hero: {
      name: '久積奎吾',
      occupation: 'フルスタック Web デベロッパー',
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com', icon: 'github' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
      ]
    },
    about: {
      paragraphs: [
        'こんにちは！久積奎吾と申します。Web開発に情熱を持つフルスタックデベロッパーです。',
        'フロントエンドとバックエンドの両方で豊富な経験があり、特にモダンなJavaScriptフレームワーク（Vue.js、React）とNode.jsを使用した開発を得意としています。',
        'ユーザー体験を重視したインタラクティブなWebアプリケーションの構築に取り組んでおり、常に最新の技術トレンドをキャッチアップし、より良いソリューションを提供することを心がけています。'
      ],
      infoCards: [
        { icon: '💼', title: '職業', value: 'Web デベロッパー' },
        { icon: '🎓', title: '学歴', value: '情報工学専攻' }
      ]
    },
    skills: [
      {
        category: 'フロントエンド',
        items: [
          'Vue.js',
          'React',
          'JavaScript / TypeScript',
          'HTML / CSS'
        ]
      },
      {
        category: 'バックエンド',
        items: [
          'Node.js',
          'Python',
          'Spring Boot',
          'Database (SQL/NoSQL)'
        ]
      },
      {
        category: 'その他',
        items: [
          'Git / GitHub',
          'Docker',
          'CI/CD'
        ]
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Eコマースサイト',
        description: 'Vue.js と Node.js を使用したフルスタックのEコマースアプリケーション。ショッピングカート、決済機能を実装。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Vue.js', 'Node.js', 'MongoDB'],
        demoUrl: 'https://example.com/demo1',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 2,
        title: 'タスク管理アプリ',
        description: 'React と Firebase を使用したリアルタイムタスク管理アプリケーション。ドラッグ&ドロップ機能付き。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Firebase', 'Material-UI'],
        demoUrl: 'https://example.com/demo2',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 3,
        title: 'ブログプラットフォーム',
        description: 'Next.js と TypeScript で構築したモダンなブログプラットフォーム。SEO最適化とMarkdownサポート。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoUrl: 'https://example.com/demo3',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 4,
        title: 'データビジュアライゼーション',
        description: 'D3.js を使用したインタラクティブなデータ可視化ダッシュボード。リアルタイムデータ更新対応。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Vue.js', 'D3.js', 'WebSocket'],
        demoUrl: 'https://example.com/demo4',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      }
    ]
  },
  soundEngineer: {
    hero: {
      name: '久積奎吾',
      occupation: 'サウンドエンジニア',
      description: 'レコーディング/ミックス/マスタリング',
      socialLinks: []
    },
    about: {
      paragraphs: [
        '音響の専門学校を卒業後、5年間レコーディングスタジオに勤務。その後独立して現在活動中。'
      ],
      infoCards: [],
      socialLinks: [
        { name: 'Discord', url: 'https://discord.com', icon: 'discord', username: 'zumi_0529' },
        { name: 'Twitter (現X)', url: 'https://x.com/zuming', icon: 'twitter' },
        { name: 'Bluesky', url: 'https://bsky.app/profile/zuming.bsky.social', icon: 'bluesky' },
        { name: 'お仕事させていただいたリスト', url: 'https://youtube.com/playlist?list=PL75mlFdi1Jn5eTeKN4x6i5PWadLweV2L6&si=jC6Kv3PW-9EWvOzS', icon: 'youtube' }
      ]
    },
    pricing: {
      images: [
        {
          src: 'https://github.com/user-attachments/assets/5183aaa8-0306-4460-ac3f-d33fe1ca1fdf',
          alt: 'バンドや弾き語りの場合'
        },
        {
          src: 'https://github.com/user-attachments/assets/a5545fff-7578-4f69-a5cb-95914cebdb56',
          alt: '歌ってみた形式の場合'
        }
      ]
    },
    equipment: [
      {
        category: 'PC',
        items: [
          'Apple / MacBook Air (13-inch, M3, 2024)'
        ]
      },
      {
        category: 'DAW',
        items: [
          'Avid / Protools2024.3'
        ]
      },
      {
        category: 'Mixer',
        items: [
          'SSL / BiG SiX'
        ]
      },
      {
        category: 'I/O',
        items: [
          'MACKIE / DL16S',
          'STEINBERG / UR28M'
        ]
      },
      {
        category: 'Speaker',
        items: [
          'NEUMANN / KH120A',
          'SONY / zs-m5'
        ]
      },
      {
        category: 'Headphone',
        items: [
          'SONY / MDR-CD900ST',
          'AKG / Q701'
        ]
      },
      {
        category: 'HA/Compressor',
        items: [
          'DRAWMER / 1960'
        ]
      },
      {
        category: 'Mic',
        items: [
          'NEUMANN / TLM102',
          'audio technica / ATM25',
          'SHURE / SM57 x2',
          'AKG / P2',
          'AKG / P4 x4',
          'AKG / P17 x2',
          'LEWITT / LCT040 x2'
        ]
      },
      {
        category: 'DI',
        items: [
          'RUPERT NEVE DESIGNS / RNDI'
        ]
      }
    ],
    portfolio: [
      {
        id: 1,
        title: '毛布にくるまって',
        description: '浮力 — レコーディング・ミックス・マスタリング担当',
        youtubeId: 'O-hlZ98lur8',
        tags: ['レコーディング', 'ミックス', 'マスタリング'],
        demoUrl: 'https://youtu.be/O-hlZ98lur8',
        demoLabel: 'YouTube で視聴'
      },
      {
        id: 2,
        title: 'シンデレラリバティズ',
        description: 'シンデレラ・ガール — レコーディング・ミックス・マスタリング担当',
        youtubeId: '14ahw3QO4wQ',
        tags: ['レコーディング', 'ミックス', 'マスタリング'],
        demoUrl: 'https://youtu.be/14ahw3QO4wQ',
        demoLabel: 'YouTube で視聴'
      }
    ]
  }
}
