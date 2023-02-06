@extends('layouts.app')

@section('content')
    <h1>{{ $post->title }}</h1>

    @if ($post->category)
        <h3>Categoria:
            <a href="{{ route('admin.categories.show', ['category' => $post->category]) }}">{{$post->category->name}}</a>
        </h3>
    @endif
    <div>
        @if ($post->tags->all())
            <strong>Tags: </strong>
            @foreach ($post->tags as $tag)
                <a href="{{ route('admin.tags.show', ['tag' => $tag]) }}">{{ $tag->name }}</a>{{ $loop->last ? '' : ', ' }}
            @endforeach
        @endif
    </div>

    <img src="{{ $post->image }}" alt="{{ $post->title }}">
    <img src="{{ asset('storage/' . $post->uploaded_img) }}" alt="{{ $post->title }}">
    <p>
        {{ $post->content }}
    </p>
    <div class="text-center">
        <a href="{{ route('admin.posts.edit', ['post' => $post]) }}" class="btn btn-warning">Edita</a>
    </div>
@endsection
