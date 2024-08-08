export interface SearchResult {
  wrapperType: 'track' | 'collection' | 'artist';
  kind:
    | 'book'
    | 'album'
    | 'coached-audio'
    | 'feature-movie'
    | 'interactive-booklet'
    | 'music-video'
    | 'pdf'
    | 'podcast'
    | 'podcast-episode'
    | 'software-package'
    | 'song'
    | 'tv-episode'
    | 'artist';
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: 9.99;
  trackPrice: 1.29;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}
