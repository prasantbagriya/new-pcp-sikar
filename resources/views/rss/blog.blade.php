@php echo '<?xml version="1.0" encoding="UTF-8" ?>'; @endphp
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
        <title>{{ config('app.name', 'Sikar Education Hub') }} - Blog</title>
        <link>{{ url('/') }}</link>
        <description>Latest insights, guides, and tutorials from Sikar Education Hub.</description>
        <language>en-us</language>
        <lastBuildDate>{{ now()->toRfc822String() }}</lastBuildDate>
        @foreach($posts as $post)
            <item>
                <title>{{ $post->title }}</title>
                <link>{{ url('/' . $post->slug) }}</link>
                <description><![CDATA[ {!! \Illuminate\Support\Str::limit(strip_tags($post->content), 300) !!} ]]></description>
                <pubDate>{{ $post->created_at->toRfc822String() }}</pubDate>
                <guid isPermaLink="true">{{ url('/' . $post->slug) }}</guid>
                @if($post->coverImage)
                    <media:content url="{{ $post->coverImage }}" medium="image" />
                @endif
            </item>
        @endforeach
    </channel>
</rss>
