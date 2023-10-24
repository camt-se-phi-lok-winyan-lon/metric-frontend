export interface LibItem {
  name: 'AI Waifu'
  repo: 'some repo'
  test_coverage: '80%'
  test_coverage_grade: 'A'
  reusability: number
  document_score: 3
  activeness: 0.3312
  activeness_grade: 'A'
}

export interface RepoItem {
  id: number
  name: string
  url: string
  lintScore: number
  testCoverage: number
  documentScore: number
  activeness: number
  testPercentageGrade: string
  activenessGrade: string
}
